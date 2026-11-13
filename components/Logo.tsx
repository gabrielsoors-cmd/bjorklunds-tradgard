import { medBas } from "@/lib/bas";

type Props = { className?: string; decorative?: boolean; sizes?: string; eager?: boolean };

// Loggan med amplen och namnet, i två förminskade WebP-storlekar. Den har vit bakgrund.
export function Logo({ className = "", decorative = false, sizes = "64px", eager = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={medBas("/logo-480.webp")}
      srcSet={`${medBas("/logo-160.webp")} 160w, ${medBas("/logo-480.webp")} 480w`}
      sizes={sizes}
      alt={decorative ? "" : "Älvdalens Blommor & Trädgårds logga: en blommande ampel ovanför namnet"}
      width={1225}
      height={1274}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
