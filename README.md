# Björklunds Trädgård – bjorklundstradgard.se

Ensidig webbplats för Björklunds Trädgård i Älvdalen: egenodlade plantor och blommor, amplar och krukor som planteras och färdigställs, självplock kring midsommar samt trädgårds- och skogstjänster.

Byggd med Next.js 16 (App Router) och Tailwind CSS 4. Hostas på Vercel, som bygger om sajten automatiskt vid varje push till `main`.

## Ändra innehåll

| Fil | Innehåll |
| --- | --- |
| `content/site.ts` | E-post, telefon, adress, kartlänk och texten om öppettider |
| `content/innehall.ts` | Alla texter, trädgårdsåret, ampelstegen och tjänsterna |
| `content/images.ts` | Alla bilder, inklusive galleriet |

**Bilder:** tills Björklunds har egna bilder används gratisbilder från Pexels. Lägg en egen bild i `public/bilder/` och byt posten i `content/images.ts` till `{ src: "/bilder/filnamn.jpg", alt: "..." }`. Galleriet (`galleri`) ska fyllas med bilder från den egna trädgården.

**Självplock och säsong:** när datum för självplock är klart, skriv in det i `sjalvplock` i `content/innehall.ts`.

## Design

- Vitt och ängsgrönt `#f1f4ee` som bakgrunder, text `#1d2a20` / `#586356`
- Huvudfärg mossgrön `#2e5233`, guld från loggan `#8c6a2f` / `#c9a45c`, blomrosa `#b8336a` för självplocket
- Rubriker i Young Serif, brödtext i Figtree (båda självhostade via Fontsource)
- Fast sidhuvud med hamburgermeny på mobil och surfplatta

Bilderna går via Vercels bildoptimering, så besökarens webbläsare hämtar allt från den egna domänen. Sajten sätter inga kakor och behöver ingen kakbanner.

## Utveckling

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # typkontroll
npm run build      # produktionsbygge
```

## Status

Klart i första versionen: hela sidan, mobilanpassning, SEO-grund (titel, beskrivning, canonical, sitemap, robots, ikoner, delningsbild, strukturerad data för lokalt företag), 404-sida.

Väntar på kunden:

- Rättning av alla texter (de är utkast)
- Bekräfta att adressen Pellvägen 6 är där man hämtar plantor och lämnar in amplar
- Vilka trädgårds- och skogstjänster som faktiskt erbjuds
- När amplar kan lämnas in, och priser
- Egna bilder till galleriet
