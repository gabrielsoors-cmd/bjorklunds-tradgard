import Image from "next/image";

type Props = { className?: string; decorative?: boolean; sizes?: string; preload?: boolean };

// Den runda loggan med amplen. Optimeras automatiskt (WebP/AVIF i rätt storlek).
export function Logo({ className = "", decorative = false, sizes = "64px", preload = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt={decorative ? "" : "Björklunds Trädgårds logga: en blommande ampel i en guldring"}
      width={579}
      height={592}
      sizes={sizes}
      preload={preload}
      className={className}
    />
  );
}
