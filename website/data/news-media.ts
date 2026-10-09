import type { NewsImage } from "./news";

// PDF previews are direct raster crops of the actual papers, never reconstructed layouts.
// Cities uses the lab’s published preview; the two older articles use journal covers.
export const newsMedia = {
  "eccvProof": {
    "src": "/news/eccv-2026-proof.png",
    "alt": "ECCV 2026 author proof showing the Urban Boundaries, Social Barriers title, authors, affiliations, complete abstract and Springer proceedings information",
    "caption": "ECCV 2026 · Author proof: authors & abstract",
    "width": 1317,
    "height": 1890,
    "kind": "paper",
    "sourceHref": "https://doi.org/10.1007/978-3-032-37356-4_23"
  },
  "eccvFigure": {
    "src": "/news/eccv-2026-figure.png",
    "alt": "Figure 1 from the ECCV paper comparing gated and open communities and model performance",
    "caption": "ECCV paper · Gated vs. open communities",
    "width": 1104,
    "height": 474,
    "kind": "paper",
    "sourceHref": "https://arxiv.org/pdf/2609.03804"
  },
  "streetHealth": {
    "src": "/news/bae-2026-preview.png",
    "alt": "Building and Environment published PDF showing the Street space as health infrastructure title, authors and full abstract",
    "caption": "Building and Environment · Authors & abstract",
    "width": 1698,
    "height": 1419,
    "kind": "paper",
    "sourceHref": "https://doi.org/10.1016/j.buildenv.2026.115095"
  },
  "ustGnn": {
    "src": "/news/ust-gnn-2026-preview.png",
    "alt": "Published UST-GNN first page showing the Computers, Environment and Urban Systems journal heading, authors and full abstract",
    "caption": "Computers, Environment and Urban Systems · Authors & abstract",
    "width": 1698,
    "height": 1524,
    "kind": "paper",
    "sourceHref": "https://urbanmorphology.studio/pdfs/zhao-et-al-2026-ust-gnn.pdf"
  },
  "commuting": {
    "src": "/news/commuting-2026-preview.png",
    "alt": "Published commuting-flows paper first page showing the Sustainable Cities and Society journal heading, authors and full abstract",
    "caption": "Sustainable Cities and Society · Authors & abstract",
    "width": 1698,
    "height": 1194,
    "kind": "paper",
    "sourceHref": "https://urbanmorphology.studio/pdfs/zhao-et-al-2026-pig-gnn-commuting-flows.pdf"
  },
  "cities": {
    "src": "/news/cities-2026-preview.png",
    "alt": "Beyond single snapshots published paper preview showing the Cities journal heading, title and authors",
    "caption": "Cities · Journal, title & authors",
    "width": 1270,
    "height": 543,
    "kind": "paper",
    "sourceHref": "https://urbanmorphology.studio/2026/05/25/beyond-single-snapshots.html"
  },
  "cupumAward": {
    "src": "/news/cupum-2025-award.jpg",
    "alt": "CUPUM auditorium screen announcing Minwei Zhao as the Best Early Career prize winner",
    "caption": "CUPUM 2025 · Best Early Career award announcement",
    "width": 800,
    "height": 600,
    "kind": "photo",
    "sourceHref": "https://www.linkedin.com/posts/caiwurban_an-incredibly-fulfilling-four-days-at-cupum-activity-7345016936222670849-tG45"
  },
  "cupumTeam": {
    "src": "/news/cupum-2025-team.jpg",
    "alt": "Urban Morphology Studio colleagues together beside the UCL sign during CUPUM 2025",
    "caption": "CUPUM 2025 · Lab team at UCL",
    "width": 1707,
    "height": 1280,
    "kind": "photo",
    "sourceHref": "https://urbanmorphology.studio/2025/06/24/example-post-5.html"
  },
  "cupumSession": {
    "src": "/news/cupum-2025-session.jpg",
    "alt": "A speaker leads a classroom session for seated CUPUM attendees",
    "caption": "CUPUM 2025 · Classroom session",
    "width": 800,
    "height": 600,
    "kind": "photo",
    "sourceHref": "https://www.linkedin.com/posts/caiwurban_an-incredibly-fulfilling-four-days-at-cupum-activity-7345016936222670849-tG45"
  },
  "hangzhouBanner": {
    "src": "/news/hangzhou-2025-banner.png",
    "alt": "Official banner for the 2025 geographical modeling and geographical information analysis conference in Hangzhou",
    "caption": "Hangzhou 2025 · Official conference banner",
    "width": 1125,
    "height": 607,
    "kind": "photo",
    "sourceHref": "https://urbanmorphology.studio/2025/04/23/example-post-3.html"
  },
  "hangzhouAudience": {
    "src": "/news/hangzhou-2025-audience.jpg",
    "alt": "Panoramic official organizer photo of the audience at the Hangzhou conference",
    "caption": "Hangzhou 2025 · Organizer’s conference photo",
    "width": 1080,
    "height": 392,
    "kind": "photo",
    "sourceHref": "https://www.gsc.org.cn/gsc/xueshuDetail.html?contentId=2066&id=20"
  },
  "hangzhouDelegates": {
    "src": "/news/hangzhou-2025-delegates.jpg",
    "alt": "Official organizer photo of conference delegates seated in the Hangzhou conference hall",
    "caption": "Hangzhou 2025 · Organizer’s delegate photo",
    "width": 1080,
    "height": 719,
    "kind": "photo",
    "sourceHref": "https://www.gsc.org.cn/gsc/xueshuDetail.html?contentId=2066&id=20"
  },
  "medGnn": {
    "src": "/news/ust-gnn-original-preview.png",
    "alt": "Original MedGNN arXiv preprint first page with title, authors and full abstract",
    "caption": "MedGNN · Original preprint: authors & abstract",
    "width": 1374,
    "height": 897,
    "kind": "paper",
    "sourceHref": "https://arxiv.org/pdf/2504.04739v1"
  },
  "scsCover": {
    "src": "/news/scs-journal-cover.jpg",
    "alt": "Sustainable Cities and Society journal cover",
    "caption": "Journal cover · Sustainable Cities and Society",
    "width": 237,
    "height": 298,
    "kind": "paper",
    "sourceHref": "https://www.sciencedirect.com/journal/sustainable-cities-and-society"
  },
  "epbCover": {
    "src": "/news/epb-journal-cover.jpg",
    "alt": "Environment and Planning B: Urban Analytics and City Science journal cover from Sage",
    "caption": "Journal cover · Environment and Planning B",
    "width": 288,
    "height": 413,
    "kind": "paper",
    "sourceHref": "https://www.sagepub.com/shop/subscribe-to-a-journal/environment-and-planning-b-urban-analytics-and-city-science-203385"
  }
} as const satisfies Record<string, NewsImage>;

