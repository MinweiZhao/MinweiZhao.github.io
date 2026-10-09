import Image from "next/image";

// Reuse the official marks already present in the website, with each mark
// displayed independently. Crop coordinates are layout data, not new artwork.
const institutions = {
  hkust: { label: "HKUST(GZ)", src: "/education-phd-logos.png", sourceWidth: 270, sourceHeight: 175, x: 0, y: 9, width: 44, height: 68 },
  nus: { label: "National University of Singapore", src: "/education-phd-logos.png", sourceWidth: 270, sourceHeight: 175, x: 16, y: 91, width: 66, height: 81 },
  ucl: { label: "University College London", src: "/education-master-logos.png", sourceWidth: 200, sourceHeight: 145, x: 16, y: 15, width: 133, height: 54 },
  nokia: { label: "Nokia Bell Labs", src: "/education-master-logos.png", sourceWidth: 200, sourceHeight: 145, x: 16, y: 80, width: 134, height: 55 },
  njupt: { label: "Nanjing University of Posts and Telecommunications", src: "/education-bachelor-logos.png", sourceWidth: 245, sourceHeight: 120, x: 14, y: 17, width: 88, height: 96 },
  tongji: { label: "Tongji University", src: "/education-bachelor-logos.png", sourceWidth: 245, sourceHeight: 120, x: 115, y: 13, width: 99, height: 98 },
};

export type Institution = keyof typeof institutions;

export default function InstitutionLogo({ institution, size = "compact" }: { institution: Institution; size?: "compact" | "large" }) {
  const logo = institutions[institution];
  const scale = size === "large"
    ? Math.min(78 / logo.height, 148 / logo.width)
    : Math.min(42 / logo.height, 88 / logo.width);
  return (
    <span className={`institution-logo institution-logo-${size}`} role="img" aria-label={`${logo.label} logo`} title={logo.label} style={{ width: logo.width * scale, height: logo.height * scale }}>
      <Image src={logo.src} alt="" aria-hidden="true" width={logo.sourceWidth} height={logo.sourceHeight} unoptimized style={{ width: logo.sourceWidth * scale, height: logo.sourceHeight * scale, left: -logo.x * scale, top: -logo.y * scale }} />
    </span>
  );
}
