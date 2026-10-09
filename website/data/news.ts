import { newsMedia } from "./news-media";

export type NewsImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  kind: "paper" | "photo";
  sourceHref?: string;
};

export type NewsItem = {
  id: string;
  date: string;
  dateTime: string;
  text: string;
  href: string;
  source: string;
  images: readonly [NewsImage, ...NewsImage[]];
};

// Keep newest first; use only the date precision supported by the source.
// The carousel displays at most 25 records, in groups of five.
export const recentNews: readonly NewsItem[] = [
  {
    id: "gba-gcs-release",
    date: "23 Sep 2026",
    dateTime: "2026-09-23",
    text: "Shared our ECCV paper and GBA-GCs on LinkedIn: public labels, evaluation splits and model weights are available for gated-community research.",
    href: "https://www.linkedin.com/posts/minwei-zhao-14075332b_happy-to-share-our-eccv-2026-paper-urban-activity-7508524646691164161-bpNF",
    source: "My LinkedIn update",
    images: [newsMedia.eccvProof, newsMedia.eccvFigure],
  },
  {
    id: "eccv-proceedings",
    date: "10 Sep 2026",
    dateTime: "2026-09-10",
    text: "Urban Boundaries, Social Barriers is now published in the ECCV 2026 proceedings, with a Springer chapter and permanent DOI.",
    href: "https://doi.org/10.1007/978-3-032-37356-4_23",
    source: "ECCV · Springer",
    images: [newsMedia.eccvProof, newsMedia.eccvFigure],
  },
  {
    id: "street-health-paper",
    date: "16 Aug 2026",
    dateTime: "2026-08-16",
    text: "NUS Urban Analytics Lab featured our new Building and Environment paper on LinkedIn, examining uneven street support for everyday exercise.",
    href: "https://www.linkedin.com/posts/urban-analytics-lab_most-assessments-of-physical-activity-affordances-activity-7494634239808712705-mDBr",
    source: "NUS Urban Analytics Lab · LinkedIn",
    images: [newsMedia.streetHealth],
  },
  {
    id: "ust-gnn-paper",
    date: "30 Jul 2026",
    dateTime: "2026-07-30",
    text: "UST-GNN is published in Computers, Environment and Urban Systems, combining spatial and topological representations for urban health analytics.",
    href: "https://urbanmorphology.studio/2026/07/30/ust-gnn-urban-health.html",
    source: "Urban Morphology Studio",
    images: [newsMedia.ustGnn],
  },
  {
    id: "commuting-paper",
    date: "22 Jun 2026",
    dateTime: "2026-06-22",
    text: "Our Sustainable Cities and Society paper brings spatial interaction theory and interpretable graph learning together to predict urban commuting flows.",
    href: "https://www.linkedin.com/posts/caiwurban_urbanmobility-graphneuralnetworks-geoai-activity-7474804354722476032-xqLZ",
    source: "Publication announcement · LinkedIn",
    images: [newsMedia.commuting],
  },
  {
    id: "street-view-paper",
    date: "25 May 2026",
    dateTime: "2026-05-25",
    text: "Our Cities paper, Beyond single snapshots, explores how multi-scale street-view heterogeneity relates to urban perception.",
    href: "https://urbanmorphology.studio/2026/05/25/beyond-single-snapshots.html",
    source: "Urban Morphology Studio",
    images: [newsMedia.cities],
  },
  {
    id: "cupum-award",
    date: "Jun 2025",
    dateTime: "2025-06",
    text: "Received the Best Early Career Paper Award at CUPUM 2025 in London for GravityGNN, our work on home-to-work spatial flows in England.",
    href: "https://www.linkedin.com/posts/caiwurban_an-incredibly-fulfilling-four-days-at-cupum-activity-7345016936222670849-tG45",
    source: "CUPUM conference report · LinkedIn",
    images: [newsMedia.cupumAward, newsMedia.cupumTeam],
  },
  {
    id: "cupum-presentation",
    date: "Jun 2025",
    dateTime: "2025-06",
    text: "Presented GravityGNN at the 19th CUPUM conference at UCL CASA, sharing graph-based modelling of urban origin–destination flows.",
    href: "https://urbanmorphology.studio/2025/06/24/example-post-5.html",
    source: "CUPUM 2025 · London",
    images: [newsMedia.cupumTeam, newsMedia.cupumSession],
  },
  {
    id: "cupum-workshop",
    date: "Jun 2025",
    dateTime: "2025-06",
    text: "Helped organize a CUPUM workshop on AI and machine learning for urban planning support with Mingshu Wang, Cai Wu and Ziqi Li.",
    href: "https://www.linkedin.com/posts/caiwurban_an-incredibly-fulfilling-four-days-at-cupum-activity-7345016936222670849-tG45",
    source: "CUPUM conference report · LinkedIn",
    images: [newsMedia.cupumSession, newsMedia.cupumTeam],
  },
  {
    id: "hangzhou-conference",
    date: "Apr 2025",
    dateTime: "2025-04",
    text: "Joined the Urban Morphology Studio’s conference visit to Hangzhou for research discussions and exchange with the wider urban research community.",
    href: "https://urbanmorphology.studio/2025/04/23/example-post-3.html",
    source: "Urban Morphology Studio",
    images: [newsMedia.hangzhouBanner, newsMedia.hangzhouAudience, newsMedia.hangzhouDelegates],
  },
  {
    id: "ust-gnn-preprint",
    date: "7 Apr 2025",
    dateTime: "2025-04-07",
    text: "Released MedGNN, the original arXiv preprint that later developed into UST-GNN, introducing our spatial–topological framework for urban health analytics.",
    href: "https://arxiv.org/abs/2504.04739v1",
    source: "arXiv · Original preprint",
    images: [newsMedia.medGnn],
  },
  {
    id: "urban-poverty-paper",
    date: "Apr 2025",
    dateTime: "2025-04",
    text: "Co-authored Perceiving the fine-scale urban poverty using street view images through a vision-language model, published in Sustainable Cities and Society.",
    href: "https://doi.org/10.1016/j.scs.2025.106267",
    source: "Sustainable Cities and Society · Vol. 123",
    images: [newsMedia.scsCover],
  },
  {
    id: "nighttime-vitality-paper",
    date: "Jan 2023",
    dateTime: "2023-01",
    text: "Our study of urban nighttime vitality and spatial structure appeared in Environment and Planning B, following its online publication in June 2022.",
    href: "https://doi.org/10.1177/23998083221108191",
    source: "Environment and Planning B · Vol. 50",
    images: [newsMedia.epbCover],
  },
];
