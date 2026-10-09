import Image from "next/image";
import InstitutionLogo from "../components/InstitutionLogo";
import NewsCarousel from "../components/NewsCarousel";
import { studentCollaborators } from "../data/collaborators";
import { recentNews } from "../data/news";

const interests = [
  "Urban imagery and visual intelligence, including street-view imagery and computer vision",
  "Graph representation learning for spatial and relational urban data",
  "Urban health, mobility, morphology, and public space",
  "Spatial inequality, gated communities, urban boundaries, and equity",
  "Geographic evaluation, generalization, and interpretable machine learning",
  "Federated and ownership-aware learning for fragmented urban data",
];

const profileLinks = [
  { label: "Email", icon: "/brand-icons/outlook.svg", href: "mailto:mzhao886@connect.hkust-gz.edu.cn" },
  { label: "Google Scholar", icon: "/brand-icons/google-scholar.svg", href: "https://scholar.google.com/citations?user=iph-0OcAAAAJ" },
  { label: "ResearchGate", icon: "/brand-icons/researchgate.svg", href: "https://www.researchgate.net/profile/Minwei-Zhao" },
  { label: "LinkedIn", icon: "/brand-icons/linkedin.svg", href: "https://www.linkedin.com/in/minwei-zhao-14075332b" },
  { label: "GitHub", icon: "/brand-icons/github.svg", href: "https://github.com/MinweiZhao" },
];

const educationPeriods = [
  {
    years: "2024—Present",
    degree: "Doctoral studies",
    field: "Urban Governance and Design",
    institution: "The Hong Kong University of Science and Technology (Guangzhou)",
    institutions: ["hkust", "nus"] as const,
    supervisors: [
      {
        name: "Cai Wu",
        affiliation: "HKUST(GZ)",
        institution: "hkust" as const,
        href: "https://urbanmorphology.studio/members/01-wu-cai.html",
        image: "/supervisor-cai-wu.png",
      },
      {
        name: "Filip Biljecki",
        affiliation: "NUS",
        institution: "nus" as const,
        href: "https://filipbiljecki.com/",
        image: "/supervisor-filip-biljecki.jpg",
      },
    ],
  },
  {
    years: "2022—2024",
    degree: "Master’s",
    field: "Remote Sensing and GIS",
    institution: "University College London",
    institutions: ["ucl", "nokia"] as const,
    supervisors: [
      {
        name: "Stephen Law",
        affiliation: "UCL",
        institution: "ucl" as const,
        href: "https://profiles.ucl.ac.uk/21695-stephen-law",
        image: "/supervisor-stephen-law.jpg",
      },
      {
        name: "Daniele Quercia",
        affiliation: "Nokia Bell Labs",
        institution: "nokia" as const,
        href: "https://www.nokia.com/people/daniele-quercia/",
        image: "/supervisor-daniele-quercia.png",
      },
      {
        name: "Sanja Šćepanović",
        affiliation: "Nokia Bell Labs",
        institution: "nokia" as const,
        href: "https://www.nokia.com/people/sanja-scepanovic/",
        image: "/supervisor-sanja-scepanovic-tinted.jpg",
      },
    ],
  },
  {
    years: "2018—2022",
    degree: "Bachelor’s",
    field: "Surveying and GIS",
    institution: "Nanjing University of Posts and Telecommunications",
    institutions: ["njupt", "tongji"] as const,
    supervisors: [
      {
        name: "Yu Ye",
        affiliation: "Tongji University",
        institution: "tongji" as const,
        href: "https://caup.tongji.edu.cn/caupen/_t618/c1/a8/c11079a115112/page.htm",
        image: "/supervisor-yu-ye-color.jpg",
      },
      {
        name: "Chao Wu",
        affiliation: "NJUPT",
        institution: "njupt" as const,
        href: "https://orcid.org/0000-0001-7159-3286",
        image: "/supervisor-chao-wu.png",
      },
    ],
  },
];

const publications = [
  {
    year: "2026",
    venue: "ECCV",
    title:
      "Urban Boundaries, Social Barriers: A Benchmark and Vision-Centric Framework for Mapping Gated Communities and Equity Implications",
    authors:
      "Minwei Zhao, Weiming Zhang, Jiawang Du, Qiming Liu, Weiming Zhuang, Pei Nie, Cai Wu",
    detail: "Computer Vision — ECCV 2026, LNCS 17051, pp. 414–432. Published 10 September 2026.",
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2609.03804" },
      { label: "DOI", href: "https://doi.org/10.1007/978-3-032-37356-4_23" },
      { label: "Springer", href: "https://link.springer.com/chapter/10.1007/978-3-032-37356-4_23" },
      { label: "Code & data", href: "https://github.com/MinweiZhao/GBA-GCs" },
    ],
    note: "Open preprint · Equal contribution: Minwei Zhao and Weiming Zhang",
    bibtex: `@inproceedings{zhao2026urbanboundaries,
  author    = {Zhao, Minwei and Zhang, Weiming and Du, Jiawang and Liu, Qiming and Zhuang, Weiming and Nie, Pei and Wu, Cai},
  title     = {Urban Boundaries, Social Barriers: A Benchmark and Vision-Centric Framework for Mapping Gated Communities and Equity Implications},
  booktitle = {Computer Vision -- ECCV 2026},
  series    = {Lecture Notes in Computer Science},
  volume    = {17051},
  pages     = {414--432},
  publisher = {Springer},
  doi       = {10.1007/978-3-032-37356-4_23},
  url       = {https://link.springer.com/chapter/10.1007/978-3-032-37356-4_23},
  year      = {2026}
}`,
  },
  {
    year: "2026",
    venue: "Building and Environment",
    title:
      "Street space as health infrastructure: diagnosing uneven street support for exercise through the spatial triad",
    authors:
      "Minwei Zhao, Guosheng Yang, Zhuoni Zhang, Filip Biljecki, Hanzhi Zu, Cai Wu",
    detail: "Building and Environment, 304: 115095.",
    links: [
      { label: "PDF", href: "https://ual.sg/publication/2026-bae-streetspace/2026-bae-streetspace.pdf" },
      { label: "DOI", href: "https://doi.org/10.1016/j.buildenv.2026.115095" },
      { label: "Publication page", href: "https://ual.sg/publication/2026-bae-streetspace/" },
    ],
    note: "Accepted manuscript · Open access",
    bibtex: `@article{zhao2026streetspace,
  author  = {Zhao, Minwei and Yang, Guosheng and Zhang, Zhuoni and Biljecki, Filip and Zu, Hanzhi and Wu, Cai},
  title   = {Street space as health infrastructure: diagnosing uneven street support for exercise through the spatial triad},
  journal = {Building and Environment},
  volume  = {304},
  pages   = {115095},
  doi     = {10.1016/j.buildenv.2026.115095},
  year    = {2026}
}`,
  },
  {
    year: "2026",
    venue: "CEUS",
    title:
      "UST-GNN: A unified spatial–topological graph neural network framework for urban analytics demonstrated through a case study on urban health prediction",
    authors:
      "Minwei Zhao, Sanja Šćepanović, Stephen Law, Ivica Obadić, Cai Wu, Daniele Quercia",
    detail: "Computers, Environment and Urban Systems, 129: 102466.",
    links: [
      { label: "PDF", href: "https://urbanmorphology.studio/pdfs/zhao-et-al-2026-ust-gnn.pdf" },
      { label: "DOI", href: "https://doi.org/10.1016/j.compenvurbsys.2026.102466" },
      { label: "arXiv", href: "https://arxiv.org/abs/2504.04739" },
    ],
    note: "Open access",
    bibtex: `@article{zhao2026ustgnn,
  author  = {Zhao, Minwei and Šćepanović, Sanja and Law, Stephen and Obadić, Ivica and Wu, Cai and Quercia, Daniele},
  title   = {UST-GNN: A unified spatial--topological graph neural network framework for urban analytics demonstrated through a case study on urban health prediction},
  journal = {Computers, Environment and Urban Systems},
  volume  = {129},
  pages   = {102466},
  doi     = {10.1016/j.compenvurbsys.2026.102466},
  year    = {2026}
}`,
  },
  {
    year: "2026",
    venue: "SCS",
    title:
      "Theory-informed and interpretable graph learning for urban commuting flows",
    authors: "Minwei Zhao, Dailuo Zhang, Zhecheng Shi, Cai Wu",
    detail: "Sustainable Cities and Society, 148: 107575.",
    links: [
      { label: "PDF", href: "https://urbanmorphology.studio/pdfs/zhao-et-al-2026-pig-gnn-commuting-flows.pdf" },
      { label: "DOI", href: "https://doi.org/10.1016/j.scs.2026.107575" },
    ],
    note: "Author copy",
    bibtex: `@article{zhao2026theoryinformed,
  author  = {Zhao, Minwei and Zhang, Dailuo and Shi, Zhecheng and Wu, Cai},
  title   = {Theory-informed and interpretable graph learning for urban commuting flows},
  journal = {Sustainable Cities and Society},
  volume  = {148},
  pages   = {107575},
  doi     = {10.1016/j.scs.2026.107575},
  year    = {2026}
}`,
  },
  {
    year: "2026",
    venue: "Cities",
    title:
      "Beyond single snapshots: Quantifying multi-scale heterogeneity from street-view imagery and what it reveals about perception",
    authors: "Guosheng Yang, Yunlei Su, Minwei Zhao, Chaosu Li, Cai Wu",
    detail: "Cities, 175: 107227.",
    links: [
      { label: "Article", href: "https://www.sciencedirect.com/science/article/pii/S0264275126004592" },
      { label: "DOI", href: "https://doi.org/10.1016/j.cities.2026.107227" },
      { label: "ResearchGate", href: "https://www.researchgate.net/publication/405190387_Beyond_single_snapshots_Quantifying_multi-scale_heterogeneity_from_street-view_imagery_and_what_it_reveals_about_perception" },
    ],
    bibtex: `@article{yang2026beyondsnapshots,
  author  = {Yang, Guosheng and Su, Yunlei and Zhao, Minwei and Li, Chaosu and Wu, Cai},
  title   = {Beyond single snapshots: Quantifying multi-scale heterogeneity from street-view imagery and what it reveals about perception},
  journal = {Cities},
  volume  = {175},
  pages   = {107227},
  doi     = {10.1016/j.cities.2026.107227},
  year    = {2026}
}`,
  },
  {
    year: "2026",
    venue: "arXiv",
    title: "Tarot-SAM3: Training-free SAM3 for Any Referring Expression Segmentation",
    authors:
      "Weiming Zhang, Dingwen Xiao, Songyue Guo, Guangyu Xiang, Shiqi Wen, Minwei Zhao, Lei Chen, Lin Wang",
    detail: "arXiv:2604.07916. Withdrawn preprint.",
    links: [
      { label: "Original PDF (v1)", href: "https://arxiv.org/pdf/2604.07916v1" },
      { label: "DOI", href: "https://doi.org/10.48550/arXiv.2604.07916" },
      { label: "arXiv", href: "https://arxiv.org/abs/2604.07916" },
    ],
    note: "Withdrawn on 4 August 2026 for revision. The original v1 is available for reference.",
    bibtex: `@article{zhang2026tarotsam3,
  author  = {Zhang, Weiming and Xiao, Dingwen and Guo, Songyue and Xiang, Guangyu and Wen, Shiqi and Zhao, Minwei and Chen, Lei and Wang, Lin},
  title   = {Tarot-SAM3: Training-free SAM3 for Any Referring Expression Segmentation},
  journal = {arXiv preprint arXiv:2604.07916},
  doi     = {10.48550/arXiv.2604.07916},
  note    = {Withdrawn on 4 August 2026; original version v1 remains available},
  year    = {2026}
}`,
  },
  {
    year: "2025",
    venue: "CUPUM",
    title:
      "GravityGNN: A Novel Graph Neural Network for Modelling Home-to-Work Spatial Flows in England",
    authors: "Minwei Zhao, Cai Wu",
    detail: "19th International Conference on Computational Urban Planning and Urban Management, London. Paper 155.",
    links: [
      { label: "Request a copy", href: "https://www.researchgate.net/publication/401294152_GravityGNN_A_Novel_Graph_Neural_Network_for_Modelling_Home-_to-Work_Spatial_Flows_in_England" },
      { label: "Conference proceedings", href: "https://doi.org/10.17605/OSF.IO/ABYQH" },
    ],
    note: "Best Early Career Paper Award · Proceedings link refers to the conference collection.",
    bibtex: `@inproceedings{zhao2025gravitygnn,
  author    = {Zhao, Minwei and Wu, Cai},
  title     = {GravityGNN: A Novel Graph Neural Network for Modelling Home-to-Work Spatial Flows in England},
  booktitle = {Proceedings of the 19th International Conference on Computational Urban Planning and Urban Management},
  note      = {Best Early Career Paper Award; Paper 155},
  year      = {2025}
}`,
  },
  {
    year: "2025",
    venue: "SCS",
    title:
      "Perceiving the fine-scale urban poverty using street view images through a vision-language model",
    authors: "Chao Wu, Yongxiang Liang, Minwei Zhao, Mingda Teng, Han Yue, Yu Ye",
    detail: "Sustainable Cities and Society, 123: 106267.",
    links: [
      { label: "Article", href: "https://www.sciencedirect.com/science/article/pii/S2210670725001441" },
      { label: "DOI", href: "https://doi.org/10.1016/j.scs.2025.106267" },
      { label: "ResearchGate", href: "https://www.researchgate.net/publication/389518628_Perceiving_the_fine-scale_urban_poverty_using_street_view_images_through_a_vision-language_model" },
    ],
    bibtex: `@article{wu2025urbanpoverty,
  author  = {Wu, Chao and Liang, Yongxiang and Zhao, Minwei and Teng, Mingda and Yue, Han and Ye, Yu},
  title   = {Perceiving the fine-scale urban poverty using street view images through a vision-language model},
  journal = {Sustainable Cities and Society},
  volume  = {123},
  pages   = {106267},
  doi     = {10.1016/j.scs.2025.106267},
  year    = {2025}
}`,
  },
  {
    year: "2023",
    venue: "EPB",
    title:
      "Measuring urban nighttime vitality and its relationship with urban spatial structure: A data-driven approach",
    authors: "Chao Wu, Minwei Zhao, Yu Ye",
    detail: "Environment and Planning B: Urban Analytics and City Science, 50(1): 130–145.",
    links: [
      { label: "Article", href: "https://journals.sagepub.com/doi/10.1177/23998083221108191" },
      { label: "DOI", href: "https://doi.org/10.1177/23998083221108191" },
      { label: "ResearchGate", href: "https://www.researchgate.net/publication/361301702_Measuring_urban_nighttime_vitality_and_its_relationship_with_urban_spatial_structure_A_data-driven_approach" },
    ],
    bibtex: `@article{wu2023nighttimevitality,
  author  = {Wu, Chao and Zhao, Minwei and Ye, Yu},
  title   = {Measuring urban nighttime vitality and its relationship with urban spatial structure: A data-driven approach},
  journal = {Environment and Planning B: Urban Analytics and City Science},
  volume  = {50},
  number  = {1},
  pages   = {130--145},
  doi     = {10.1177/23998083221108191},
  year    = {2023}
}`,
  },
];

function Authors({ names }: { names: string }) {
  const parts = names.split("Minwei Zhao");
  return (
    <>
      {parts[0]}
      <strong>Minwei Zhao</strong>
      {parts[1]}
    </>
  );
}

export default function Home() {
  return (
    <main className="home-world">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Minwei Zhao, home">
          <Image className="wordmark-avatar" src="/minwei-scholar-avatar.png" alt="Minwei Zhao’s Google Scholar portrait" width={44} height={44} unoptimized />
          <span className="wordmark-name">Minwei Zhao</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="#collaborators">Collaborators</a>
        </nav>
      </header>

      <div className="profile-links-bar" aria-label="Academic profiles and contact">
        <span><i aria-hidden="true" /> Find me online</span>
        <div>
          {profileLinks.map((link) => (
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              key={link.label}
            >
              <span className="profile-link-icon" aria-hidden="true">
                <Image src={link.icon} alt="" width={19} height={19} />
              </span>
              <span>{link.label}</span>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-role"><span aria-hidden="true" /> PhD Candidate · HKUST(GZ)</p>
          <h1 aria-label="Minwei Zhao">
            <span className="hero-first-name">Minwei</span>
            <span className="hero-last-name">Zhao</span>
          </h1>
          <div className="hero-intro">
            <p>I work with cities, spatial data, and machine intelligence.</p>
            <span>Urban researcher · Based in Guangzhou and Hong Kong</span>
          </div>
          <div className="hero-actions">
            <a href="#publications">Explore publications <span>↓</span></a>
            <a href="#collaborators">Meet collaborators</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <Image
              src="/minwei-zhao-alpine.jpg"
              alt="Minwei Zhao in a snowy mountain landscape"
              fill
              priority
              sizes="(max-width: 920px) calc(100vw - 30px), 54vw"
            />
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>URBAN DATA</span>
          <i />
          <span>COMPUTER VISION</span>
          <i />
          <span>SPATIAL LEARNING</span>
          <i />
          <span>CITIES & PEOPLE</span>
        </div>
      </section>

      <section className="profile-section section-shell" id="about">
        <div className="section-label">
          <span>01</span>
          <p>About</p>
        </div>
        <div className="profile-copy">
          <h2>Hello, I’m Minwei.</h2>
          <p>
            I am a PhD candidate in the Urban Governance and Design Thrust at
            the Hong Kong University of Science and Technology (Guangzhou), and
            a member of the Urban Morphology Studio. I was trained in surveying
            and mapping at Nanjing University of Posts and Telecommunications
            and in remote sensing and GIS at University College London.
          </p>
          <p>
            My research spans GIScience, GeoAI, computer vision, graph machine
            learning, and urban studies. I am especially interested in how
            computational methods change the ways we observe, evaluate, and
            explain cities—and how those choices shape evidence about urban
            health and inequality.
          </p>
        </div>
        <aside className="profile-facts">
          <div><span>Based in</span><strong>Guangzhou · Hong Kong</strong></div>
          <div><span>Affiliation</span><strong>HKUST(GZ) · UGOD</strong></div>
          <div><span>Background</span><strong>GIS · Remote Sensing · Urban Analytics</strong></div>
          <div><span>Languages</span><strong>Chinese · English</strong></div>
        </aside>
      </section>

      <section className="news-section" id="news">
        <div className="section-shell info-layout">
          <div className="section-label light-label">
            <span>02</span>
            <p>Recent news</p>
          </div>
          <NewsCarousel items={recentNews} />
        </div>
      </section>

      <section className="interests-section section-shell" id="research">
        <div className="section-label">
          <span>03</span>
          <p>Research interests</p>
        </div>
        <div className="interest-intro">
          <h2>Questions I keep returning to.</h2>
          <p>
            My work moves between methodological research and applied urban
            questions. Current interests include:
          </p>
        </div>
        <ul className="interest-list">
          {interests.map((interest, index) => (
            <li key={interest}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{interest}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-shell publication-shell">
          <div className="section-label">
            <span>04</span>
            <p>Publications</p>
          </div>
          <div className="publication-intro">
            <h2>Publications & conference work</h2>
            <p>
              A complete current list is also available on my
              <a href="https://scholar.google.com/citations?user=iph-0OcAAAAJ" target="_blank" rel="noreferrer"> Google Scholar profile</a>.
            </p>
          </div>
          <div className="publication-list">
            {publications.map((paper, index) => (
              <article className="publication-row" key={paper.title}>
                <span className="publication-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="publication-body">
                  <div className="publication-meta">
                    <span>{paper.year}</span>
                    <span>{paper.venue}</span>
                  </div>
                  <h3>{paper.title}</h3>
                  <p className="publication-authors"><Authors names={paper.authors} /></p>
                  <p className="publication-detail">{paper.detail}</p>
                  {paper.note ? <p className="publication-note">{paper.note}</p> : null}
                  <div className="publication-resources">
                    {paper.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>
                    ))}
                    <details className="publication-bibtex">
                      <summary>BibTeX</summary>
                      <pre><code>{paper.bibtex}</code></pre>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="section-label">
          <span>05</span>
          <p>Education</p>
        </div>
        <div className="education-content">
          <div className="education-intro">
            <h2>Education & supervision</h2>
            <p>Each stage is shown together with the people and institutions that shaped the work.</p>
          </div>

          <div className="education-periods">
            {educationPeriods.map((period) => (
              <article className="education-period" key={period.years}>
                <div className="education-period-main">
                  <time>{period.years}</time>
                  <h3>{period.degree}</h3>
                  <p className="education-field">{period.field}</p>
                  <p className="education-institution">{period.institution}</p>
                  <div className="education-logo-wrap">
                    {period.institutions.map((institution) => (
                      <InstitutionLogo institution={institution} size="large" key={institution} />
                    ))}
                  </div>
                </div>

                <div className="supervisor-block">
                  <p className="supervisor-label">Supervisors</p>
                  <div className="supervisor-list">
                    {period.supervisors.map((supervisor) => (
                      <a href={supervisor.href} target="_blank" rel="noreferrer" className="supervisor-card" key={supervisor.name}>
                        <span className={`supervisor-avatar${supervisor.image ? "" : " supervisor-avatar-fallback"}`}>
                          {supervisor.image ? (
                            <Image src={supervisor.image} alt={`${supervisor.name} portrait`} fill sizes="84px" unoptimized />
                          ) : (
                            <span aria-hidden="true">CW</span>
                          )}
                        </span>
                        <span className="supervisor-copy">
                          <strong>{supervisor.name}</strong>
                          <span className="person-institution"><InstitutionLogo institution={supervisor.institution} /><span>{supervisor.affiliation}</span></span>
                        </span>
                        <span className="supervisor-arrow" aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="recognition-strip" aria-label="Recognition and activities">
            <div><span>2026</span><strong>AI for Society Poster Award</strong></div>
            <div><span>2026</span><strong>ECCV published paper</strong></div>
            <div><span>2025 · CUPUM</span><strong>Best Early Career Paper Award</strong></div>
          </div>
        </div>
      </section>

      <section className="collaborators-section section-shell" id="collaborators">
        <div className="section-label"><span>06</span><p>Collaborators</p></div>
        <div className="collaborators-content">
          <div className="education-intro">
            <h2>Students & peers</h2>
            <p>Fellow students and alumni I have worked with on research papers.</p>
          </div>
          <div className="peer-list">
            {studentCollaborators.map((person) => (
              <article className="peer-card" key={person.name}>
                <div className="peer-heading"><h3><a href={person.href} target="_blank" rel="noreferrer">{person.name}</a></h3><span>{person.role}</span></div>
                <div className="peer-affiliation"><p>{person.affiliation}</p></div>
                <p className="peer-work">{person.work}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <span className="wordmark">Minwei Zhao<span>°</span></span>
          <p>PhD Candidate · HKUST(GZ)</p>
        </div>
        <div className="footer-links">
          <a href="https://scholar.google.com/citations?user=iph-0OcAAAAJ" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://github.com/MinweiZhao" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/minwei-zhao-14075332b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mzhao886@connect.hkust-gz.edu.cn">Email</a>
          <a href="#collaborators">Collaborators</a>
        </div>
        <p className="copyright">© 2026 · Guangzhou</p>
      </footer>
    </main>
  );
}
