"use client";

import { useState } from "react";
import type { NewsItem } from "../data/news";
import NewsGallery from "./NewsGallery";

const PAGE_SIZE = 5;
const MAX_NEWS = 25;

export default function NewsCarousel({ items }: { items: readonly NewsItem[] }) {
  const [page, setPage] = useState(0);
  const records = items.slice(0, MAX_NEWS);
  const pageCount = Math.ceil(records.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(0, pageCount - 1));
  const visibleItems = records.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  if (!records.length) return null;

  return (
    <div className="news-carousel" role="region" aria-label="Recent news" aria-roledescription="carousel">
      <div className="news-list" id="recent-news-page" aria-live="polite" aria-atomic="true">
        {visibleItems.map((item) => (
          <article className="news-item" key={item.id}>
            <time dateTime={item.dateTime}>{item.date}</time>
            <div className="news-story">
              <a className="news-story-link" href={item.href} target="_blank" rel="noreferrer"><p>{item.text}</p><span className="news-source">{item.source}<span aria-hidden="true"> ↗</span></span></a>
              <NewsGallery images={item.images} />
            </div>
          </article>
        ))}
      </div>
      {pageCount > 1 ? (
        <div className="news-pagination">
          <span className="news-page-count" aria-live="polite">{String(currentPage + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}</span>
          <div className="news-controls">
            <button className="news-step" type="button" aria-label="Previous news page" aria-controls="recent-news-page" disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)}><span aria-hidden="true">←</span></button>
            <div className="news-dots" role="group" aria-label="Choose a news page">
              {Array.from({ length: pageCount }, (_, index) => (
                <button className="news-dot" type="button" key={index} aria-label={`Show news page ${index + 1}`} aria-current={currentPage === index ? "page" : undefined} aria-controls="recent-news-page" onClick={() => setPage(index)}><span aria-hidden="true" /></button>
              ))}
            </div>
            <button className="news-step" type="button" aria-label="Next news page" aria-controls="recent-news-page" disabled={currentPage === pageCount - 1} onClick={() => setPage(currentPage + 1)}><span aria-hidden="true">→</span></button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
