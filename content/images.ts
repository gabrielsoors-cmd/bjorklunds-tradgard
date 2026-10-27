// Bilder. Tills Björklunds Trädgård har egna bilder används gratisbilder från Pexels
// (fri licens, får användas kommersiellt utan krav på källhänvisning: https://www.pexels.com/license/).
//
// Byta till en egen bild: lägg filen i /public/bilder/ och ersätt posten med
//   { src: "/bilder/filnamn.jpg", alt: "Beskrivning av bilden" }

export type Photo =
  | { pexels: number; alt: string }
  | { src: string; alt: string };

// Pexels-bilderna hämtas i 2000 px bredd och skalas sedan om av Vercels bildoptimering,
// så besökarens webbläsare pratar bara med vår egen domän.
export const PEXELS_QUERY = "?auto=compress&cs=tinysrgb&w=2000";

export function photoUrl(photo: Photo) {
  if ("src" in photo) return photo.src;
  const id = photo.pexels;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg${PEXELS_QUERY}`;
}

export const heroBild: Photo = {
  pexels: 16463047,
  alt: "Blommande amplar som hänger i ett ljust växthus",
};

export const plantorBild: Photo = {
  pexels: 7156429,
  alt: "Händer som tar hand om brätten med småplantor i ett växthus",
};

export const amplarBild: Photo = {
  pexels: 38114643,
  alt: "Ampel med blommande petunior mot en trävägg",
};

export const sjalvplockBild: Photo = {
  pexels: 37042007,
  alt: "Ett fält med blommande rosenskäror en sommardag",
};

export const tjanstBilder = {
  gras: { pexels: 6728933, alt: "Gräsklippning av en gräsmatta" } as Photo,
  hack: { pexels: 24595769, alt: "Häckklippning med häcksax i en trädgård" } as Photo,
  plantering: { pexels: 7728625, alt: "Händer som fyller jord i ett odlingsbrätte" } as Photo,
  skog: { pexels: 7790080, alt: "Sågning av ved i skogen" } as Photo,
};

// Galleriet ska fyllas med bilder från Björklunds egen trädgård.
// Tills de finns visar det gratisbilder.
export const galleri: Photo[] = [
  { pexels: 29008702, alt: "Färgglada amplar i ett växthus" },
  { pexels: 39319510, alt: "Rosa rosenskära i blom" },
  { pexels: 39665144, alt: "Rosa dahlior bland gröna blad" },
  { pexels: 38374536, alt: "Fuchsia i en hängande ampel" },
  { pexels: 38524143, alt: "Rosa och vit flox i full blom" },
  { pexels: 26939122, alt: "Rosa och vita petunior i en trädgård" },
  { pexels: 38185865, alt: "Rosa och röda pelargoner" },
  { pexels: 31737411, alt: "Gula solbrudar i blom" },
];
