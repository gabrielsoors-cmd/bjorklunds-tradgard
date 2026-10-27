// Grunduppgifter för Björklunds Trädgård. Ändra här så uppdateras hela sajten.

export const site = {
  name: "Björklunds Trädgård",
  url: "https://bjorklundstradgard.se",
  email: "anders3449209@outlook.com",
  // Telefonnummer saknas än. Fyll i, t.ex. "070-123 45 67", så visas det i kontaktrutan och sidfoten.
  phone: "" as string,
  ort: "Älvdalen",
  lan: "Dalarnas län",
  // Fylls i när det är bestämt var man hämtar plantor och lämnar in amplar.
  adress: "" as string,
} as const;

export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
