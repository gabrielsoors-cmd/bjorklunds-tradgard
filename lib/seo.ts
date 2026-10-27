import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  /** Hela titeln, som den ska visas i Google. */
  title: string;
  description: string;
  /** Sökväg utan domän, t.ex. "/". */
  path: string;
};

const OG_IMAGE = {
  url: "/delning.png",
  width: 1200,
  height: 630,
  alt: "Björklunds Trädgård: plantor, amplar och trädgårdstjänster i Älvdalen",
};

// All metadata går genom den här funktionen, så att canonical och delningsbild bara finns på ett ställe.
export function seo({ title, description, path }: SeoInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
