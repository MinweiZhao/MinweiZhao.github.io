import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

export default function StaticImage({
  src, fill, priority, unoptimized: _unoptimized, style, loading, ...props
}: ImageProps) {
  const imageStyle: CSSProperties | undefined = fill
    ? { position: "absolute", width: "100%", height: "100%", inset: 0, ...style }
    : style;
  return <img {...props} src={src.startsWith("/") ? `/assets/academic${src}` : src}
    style={imageStyle} loading={loading ?? (priority ? "eager" : "lazy")}
    decoding="async" fetchPriority={priority ? "high" : undefined} />;
}

