import { medBas } from "@/lib/bas";

type Props = { className?: string; decorative?: boolean; sizes?: string; eager?: boolean };

// Den runda loggan med amplen, i två förminskade WebP-storlekar.
export function Logo({ className = "", decorative = false, sizes = "64px", eager = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={medBas("/logo-480.webp")}
      srcSet={`${medBas("/logo-160.webp")} 160w, ${medBas("/logo-480.webp")} 480w`}
      sizes={sizes}
      alt={decorative ? "" : "Björklunds Trädgårds logga: en blommande ampel i en guldring"}
      width={579}
      height={592}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
