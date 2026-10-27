// Texter för Björklunds Trädgård.
// UTKAST: skrivna utifrån mötesanteckningarna. Ska läsas och rättas av Björklunds innan publicering.

import { amplarBild, plantorBild, sjalvplockBild, tjanstBilder, type Photo } from "./images";

export const hero = {
  bricka: "Plantor klara runt mitten av april",
  rubrik: "Plantor, amplar och trädgårdstjänster i Älvdalen",
  ingress:
    "Egenodlade blommor och plantor, även sorter som är svåra att hitta här i trakten. Lämna in din ampel så planterar jag den, plocka en egen bukett kring midsommar, eller låt mig ta hand om trädgården.",
};

// Översikten under hero. `href` pekar på avsnittet längre ner.
export const erbjudanden = [
  { titel: "Plantor och blommor", text: "Egen fröodling med flera sorter.", href: "#plantor", ikon: "sprout" },
  { titel: "Amplar och krukor", text: "Lämna in, jag planterar och färdigställer.", href: "#amplar", ikon: "flower" },
  { titel: "Självplock", text: "Plocka en egen bukett kring midsommar.", href: "#sjalvplock", ikon: "scissors" },
  { titel: "Trädgård och skog", text: "Skötsel av grönytor, häckar och röjning.", href: "#tjanster", ikon: "trees" },
] as const;

// Trädgårdsåret: en verklig ordningsföljd, därför numrerad.
export const tradgardsaret = [
  {
    nar: "Januari",
    titel: "Fröodlingen startar",
    text: "Jag sår tidigt, flera sorter, och även sådana som annars är svåra att få tag på i området.",
  },
  {
    nar: "Mitten av april",
    titel: "Plantorna är klara",
    text: "Tack vare den tidiga sådden är plantorna redo långt innan de brukar vara det.",
  },
  {
    nar: "Under våren",
    titel: "Amplar och krukor",
    text: "Inlämnade amplar och krukor planteras och får växa till sig tills de är färdiga.",
  },
  {
    nar: "Kring midsommar",
    titel: "Självplock",
    text: "Om säsongen går som jag hoppas öppnar jag för självplock av blommor.",
  },
];

export const plantor = {
  rubrik: "Egenodlade plantor och blommor",
  stycken: [
    "Allt börjar med fröer. Jag sår redan i januari och drar upp plantorna själv här i Älvdalen, så att de är klara runt mitten av april.",
    "Jag odlar flera sorter, och en del av dem brukar annars inte gå att köpa i området. Letar du efter något särskilt, hör av dig så ser jag vad jag kan ordna.",
  ],
  punkter: ["Egen fröodling", "Flera sorter", "Ovanliga sorter för trakten", "Klara runt mitten av april"],
  bild: plantorBild,
};

export const amplar = {
  rubrik: "Amplar och krukor",
  ingress:
    "Har du en ampel eller kruka som behöver nytt liv? Lämna in den hos mig, så planterar jag den och låter den växa till sig. När den är färdig hämtar du en fyllig ampel som är redo att hänga upp.",
  steg: [
    { titel: "Hör av dig", text: "Berätta vad du har och vilka färger eller blommor du tänker dig." },
    { titel: "Lämna in", text: "Lämna ampeln eller krukan hos mig." },
    { titel: "Jag planterar", text: "Jag planterar och sköter om den medan den växer till sig." },
    { titel: "Hämta", text: "Hämta en färdig ampel, redo att hänga upp." },
  ],
  bild: amplarBild,
};

export const sjalvplock = {
  bricka: "Kring midsommar",
  rubrik: "Plocka din egen bukett",
  stycken: [
    "Om säsongen går som jag hoppas öppnar jag för självplock kring midsommar. Då kan du komma hit och plocka en egen bukett direkt från odlingen.",
    "Datum och bilder lägger jag ut här när blommorna är redo.",
  ],
  bild: sjalvplockBild,
};

export type Tjanst = { titel: string; text: string; bild: Photo };

export const tjanster = {
  rubrik: "Trädgårds- och skogstjänster",
  ingress: "Jag hjälper till med skötseln av trädgården och tomten. Berätta vad du behöver, så kommer vi överens om upplägg och pris.",
  lista: [
    { titel: "Gräsmattor och grönytor", text: "Gräsklippning, trimning och löpande skötsel av gräsmattor och grönytor.", bild: tjanstBilder.gras },
    { titel: "Häckar och buskar", text: "Klippning av häckar och beskärning av buskar och mindre träd.", bild: tjanstBilder.hack },
    { titel: "Plantering och rabatter", text: "Jag planterar och sköter rabatter, krukor och planteringar.", bild: tjanstBilder.plantering },
    { titel: "Skog och röjning", text: "Röjning av sly och enklare skogsarbete på tomten.", bild: tjanstBilder.skog },
  ] satisfies Tjanst[],
};

export const galleriText = {
  rubrik: "Från trädgården",
  text: "Bilder från odlingen och trädgården. Klicka på en bild för att se den större.",
};

export const kontakt = {
  rubrik: "Hör av dig",
  text: "Vill du beställa plantor, lämna in en ampel eller ha hjälp i trädgården? Ring eller mejla, så svarar jag så snart jag kan. Funderingar är alltid välkomna, även utanför säsongen.",
};

export const seoText = {
  titel: "Björklunds Trädgård | Plantor och trädgårdstjänster i Älvdalen",
  beskrivning:
    "Egenodlade plantor och blommor, amplar som planteras och färdigställs, självplock kring midsommar samt trädgårds- och skogstjänster i Älvdalen.",
};
