// Lägger till sökvägsprefixet när sajten ligger på github.io-adressen (t.ex. /bjorklunds-tradgard).
export const BAS = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function medBas(sokvag: string) {
  return `${BAS}${sokvag}`;
}
