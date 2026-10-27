// Grunduppgifter för Björklunds Trädgård. Ändra här så uppdateras hela sajten.

export const site = {
  name: "Björklunds Trädgård",
  url: "https://bjorklundstradgard.se",
  email: "anders3449209@outlook.com",
  phone: "070-344 92 09",
  phoneTel: "+46703449209",
  gatuadress: "Pellvägen 6",
  ort: "Älvdalen",
  lan: "Dalarnas län",
  adress: "Pellvägen 6, Älvdalen",
  karta: "https://www.google.com/maps/search/?api=1&query=Pellv%C3%A4gen%206%2C%20%C3%84lvdalen",
  oppettider:
    "Verksamheten är säsongsbaserad och öppettiderna varierar. Hör därför alltid av dig via mejl eller telefon innan du kommer.",
} as const;

export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export const telLink = `tel:${site.phoneTel}`;
