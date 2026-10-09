import type { Institution } from "../components/InstitutionLogo";

type StudentCollaborator = {
  name: string;
  role: string;
  affiliation: string;
  institution?: Institution;
  href: string;
  work: string;
};

// Names matched to the publication author lists; affiliations and student
// status verified against the linked institutional/lab profiles (2026-10-09).
// Faculty and the supervisors already shown under Education are excluded.
export const studentCollaborators: StudentCollaborator[] = [
  { name: "Weiming Zhang", role: "PhD candidate", affiliation: "HKUST(GZ)", institution: "hkust", href: "https://personal.hkust-gz.edu.cn/Chenlei/group-computer-vision-members.html?v=d443ad4914fd", work: "Gated community mapping · Referring expression segmentation" },
  { name: "Jiawang Du", role: "PhD student", affiliation: "HKUST(GZ) · Urban Morphology Studio", institution: "hkust", href: "https://urbanmorphology.studio/members/05-jia-wang.html", work: "Gated community mapping" },
  { name: "Qiming Liu", role: "PhD student / visiting collaborator", affiliation: "Renmin University of China · HKUST(GZ)", institution: "hkust", href: "https://urbanmorphology.studio/members/10-qi-ming.html", work: "Gated community mapping" },
  { name: "Guosheng Yang", role: "Research postgraduate", affiliation: "HKUST(GZ) · Urban Morphology Studio", institution: "hkust", href: "https://urbanmorphology.studio/members/06-guo-sheng.html", work: "Urban exercise support · Street-view perception" },
  { name: "Hanzhi Zu", role: "UMS alumnus", affiliation: "HKUST(GZ) · Urban Morphology Studio", institution: "hkust", href: "https://urbanmorphology.studio/members/07-han-zhi.html", work: "Urban exercise support" },
  { name: "Dailuo Zhang", role: "PhD student", affiliation: "HKUST(GZ) · Urban Morphology Studio", institution: "hkust", href: "https://urbanmorphology.studio/members/04-dai-luo.html", work: "Graph learning for commuting flows" },
  { name: "Zhecheng Shi", role: "UMS alumnus", affiliation: "Urban Morphology Studio · Northeastern University (2026)", href: "https://urbanmorphology.studio/members/09-zhe-cheng.html", work: "Graph learning for commuting flows" },
  { name: "Yunlei Su", role: "PhD student", affiliation: "HKUST(GZ) · Urban Morphology Studio", institution: "hkust", href: "https://urbanmorphology.studio/members/02-yun-lei.html", work: "Street-view perception" },
  { name: "Dingwen Xiao", role: "PhD student", affiliation: "HKUST(GZ)", institution: "hkust", href: "https://personal.hkust-gz.edu.cn/Chenlei/group-computer-vision-members.html?v=d443ad4914fd", work: "Referring expression segmentation" },
  { name: "Songyue Guo", role: "PhD student", affiliation: "HKUST(GZ) · Data Science and Analytics", institution: "hkust", href: "https://songyue-guo.github.io/", work: "Referring expression segmentation" },
  { name: "Guangyu Xiang", role: "PhD student", affiliation: "HKUST(GZ) · Data Science and Analytics", institution: "hkust", href: "https://dsa.hkust-gz.edu.cn/blog/2024/09/05/2024-cohort/", work: "Referring expression segmentation" },
  { name: "Shiqi Wen", role: "PhD student", affiliation: "HKUST(GZ)", institution: "hkust", href: "https://personal.hkust-gz.edu.cn/Chenlei/group-computer-vision-members.html?v=d443ad4914fd", work: "Referring expression segmentation" },
];
