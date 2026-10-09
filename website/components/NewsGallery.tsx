"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { NewsImage } from "../data/news";

export default function NewsGallery({ images }: { images: readonly [NewsImage, ...NewsImage[]] }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const current = Math.min(index, images.length - 1);
  const image = images[current];
  const previous = () => setIndex((current + images.length - 1) % images.length);
  const next = () => setIndex((current + 1) % images.length);
  const open = () => dialog.current?.showModal();
  const close = () => dialog.current?.close();

  return (
    <figure className="news-gallery" aria-label="News images">
      <button className={`news-image-button news-image-${image.kind}`} type="button" onClick={open} aria-label={`Enlarge image: ${image.caption}`} aria-haspopup="dialog">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 640px) calc(100vw - 30px), 280px" unoptimized />
        <span className="news-image-enlarge" aria-hidden="true">↗</span>
      </button>
      <figcaption className="news-image-caption">{image.caption}{image.sourceHref ? <a className="news-image-source" href={image.sourceHref} target="_blank" rel="noreferrer">Source ↗</a> : null}</figcaption>
      {images.length > 1 ? (
        <div className="news-image-controls" role="group" aria-label="Choose a news image">
          <button type="button" onClick={previous} aria-label="Previous image"><span aria-hidden="true">←</span></button>
          <span aria-live="polite">{current + 1} / {images.length}</span>
          <button type="button" onClick={next} aria-label="Next image"><span aria-hidden="true">→</span></button>
        </div>
      ) : null}
      <dialog className="news-image-dialog" ref={dialog} aria-labelledby={`${id}-caption`} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => {
        if (images.length > 1 && event.key === "ArrowLeft") { event.preventDefault(); previous(); }
        if (images.length > 1 && event.key === "ArrowRight") { event.preventDefault(); next(); }
      }}>
        <div className="news-image-dialog-content">
          <button className="news-image-close" type="button" onClick={close} aria-label="Close enlarged image" autoFocus><span aria-hidden="true">×</span></button>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} unoptimized />
          <div className="news-image-dialog-footer">
            <p id={`${id}-caption`}>{image.caption}{image.sourceHref ? <a className="news-image-source" href={image.sourceHref} target="_blank" rel="noreferrer">Source ↗</a> : null}</p>
            {images.length > 1 ? (
              <div className="news-image-controls" role="group" aria-label="Choose an enlarged image">
                <button type="button" onClick={previous} aria-label="Previous enlarged image"><span aria-hidden="true">←</span></button>
                <span aria-live="polite">{current + 1} / {images.length}</span>
                <button type="button" onClick={next} aria-label="Next enlarged image"><span aria-hidden="true">→</span></button>
              </div>
            ) : null}
          </div>
        </div>
      </dialog>
    </figure>
  );
}
