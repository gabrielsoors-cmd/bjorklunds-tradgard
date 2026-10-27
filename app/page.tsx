import { ArrowRight, Flower2, Scissors, Sprout, TreePine } from "lucide-react";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import { SiteHeader } from "@/components/SiteHeader";
import {
  amplar,
  erbjudanden,
  galleriText,
  hero,
  kontakt,
  plantor,
  seoText,
  sjalvplock,
  tjanster,
  tradgardsaret,
} from "@/content/innehall";
import { galleri, heroBild } from "@/content/images";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata = seo({ title: seoText.titel, description: seoText.beskrivning, path: "/" });

const IKONER = { sprout: Sprout, flower: Flower2, scissors: Scissors, trees: TreePine } as const;

export default function Startsida() {
  return (
    <>
      <SiteHeader />
      <main id="innehall" className="flex-1">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "GardenStore",
            name: site.name,
            url: site.url,
            logo: absoluteUrl("/logo.png"),
            image: absoluteUrl("/opengraph-image"),
            email: site.email,
            telephone: site.phoneTel,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.gatuadress,
              addressLocality: site.ort,
              addressRegion: site.lan,
              addressCountry: "SE",
            },
            areaServed: site.ort,
            makesOffer: [
              "Egenodlade plantor och blommor",
              "Plantering av amplar och krukor",
              "Självplock av blommor",
              ...tjanster.lista.map((t) => t.titel),
            ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
          }}
        />

        {/* Hero */}
        <section className="behallare grid grid-cols-1 items-center gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div className="animate-in">
            <span className="bricka bg-gold-soft text-gold">{hero.bricka}</span>
            <h1 className="mt-5 text-[2.5rem] sm:text-6xl lg:text-[3.5rem]">{hero.rubrik}</h1>
            <p className="ingress mt-6 max-w-xl">{hero.ingress}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={mailto("Fråga till Björklunds Trädgård")} className="knapp">
                Kontakta oss
              </a>
              <Link href="/#erbjudande" className="knapp knapp-ljus">
                Se vad vi erbjuder
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-stor bg-meadow lg:aspect-[4/5]">
              <Photo photo={heroBild} preload sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="absolute -bottom-6 left-5 hidden rounded-full bg-paper p-1.5 shadow-[0_14px_40px_-18px_rgba(29,42,32,0.5)] sm:block lg:-left-8 lg:bottom-10">
              <Logo sizes="128px" className="h-28 w-auto lg:h-32" />
            </div>
          </div>
        </section>

        {/* Översikt */}
        <section id="erbjudande" aria-labelledby="erbjudande-rubrik" className="behallare pb-16 lg:pb-24">
          <h2 id="erbjudande-rubrik" className="sr-only">
            Det här erbjuder vi
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {erbjudanden.map((e) => {
              const Ikon = IKONER[e.ikon];
              return (
                <li key={e.href}>
                  <Link
                    href={`/${e.href}`}
                    className="group flex h-full items-start gap-4 rounded-kort bg-meadow p-5 transition-colors hover:bg-moss-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-moss">
                      <Ikon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 font-semibold text-ink">
                        {e.titel}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                      <span className="mt-1 block text-[0.9375rem] leading-snug">{e.text}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Trädgårdsåret */}
        <section aria-labelledby="aret-rubrik" className="bg-meadow">
          <div className="behallare sektion">
            <h2 id="aret-rubrik" className="text-3xl sm:text-4xl">
              Trädgårdsåret hos oss
            </h2>
            <ol className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
              <span aria-hidden="true" className="absolute left-[0.6875rem] top-2 h-[calc(100%-1rem)] w-px bg-gold-light/60 lg:left-0 lg:top-[0.6875rem] lg:h-px lg:w-full" />
              {tradgardsaret.map((s) => (
                <li key={s.titel} className="relative pl-10 lg:pl-0 lg:pt-10">
                  <span aria-hidden="true" className="absolute left-0 top-0.5 size-6 rounded-full border-4 border-meadow bg-gold lg:top-0" />
                  <p className="text-sm font-semibold text-gold">{s.nar}</p>
                  <h3 className="mt-1 text-xl">{s.titel}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Plantor */}
        <section id="plantor" aria-labelledby="plantor-rubrik" className="behallare sektion grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-stor bg-meadow lg:aspect-[5/6]">
            <Photo photo={plantor.bild} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 id="plantor-rubrik" className="text-3xl sm:text-5xl">
              {plantor.rubrik}
            </h2>
            <div className="text-flode mt-6 max-w-xl text-lg leading-relaxed">
              {plantor.stycken.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {plantor.punkter.map((p) => (
                <li key={p} className="bricka bg-moss-soft text-moss">
                  {p}
                </li>
              ))}
            </ul>
            <a href={mailto("Fråga om plantor")} className="knapp mt-8">
              Fråga om plantor
            </a>
          </div>
        </section>

        {/* Amplar */}
        <section id="amplar" aria-labelledby="amplar-rubrik" className="bg-meadow">
          <div className="behallare sektion grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-stor bg-paper lg:aspect-[5/6]">
                <Photo photo={amplar.bild} sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            </div>
            <div>
              <h2 id="amplar-rubrik" className="text-3xl sm:text-5xl">
                {amplar.rubrik}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{amplar.ingress}</p>
              <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {amplar.steg.map((s, i) => (
                  <li key={s.titel} className="rounded-kort bg-paper p-5">
                    <span className="flex size-8 items-center justify-center rounded-full bg-gold-soft text-sm font-semibold text-gold">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 text-lg">{s.titel}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-snug">{s.text}</p>
                  </li>
                ))}
              </ol>
              <a href={mailto("Lämna in ampel")} className="knapp mt-8">
                Boka inlämning av ampel
              </a>
            </div>
          </div>
        </section>

        {/* Självplock */}
        <section id="sjalvplock" aria-labelledby="sjalvplock-rubrik" className="behallare sektion">
          <div className="grid grid-cols-1 overflow-hidden rounded-stor bg-bloom-soft lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[28rem]">
              <Photo photo={sjalvplock.bild} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
              <span className="bricka self-start bg-paper text-bloom">{sjalvplock.bricka}</span>
              <h2 id="sjalvplock-rubrik" className="mt-5 text-3xl sm:text-5xl">
                {sjalvplock.rubrik}
              </h2>
              <div className="text-flode mt-5 text-lg leading-relaxed">
                {sjalvplock.stycken.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </div>
              <a href={mailto("Fråga om självplock")} className="knapp mt-8 self-start">
                Fråga om självplock
              </a>
            </div>
          </div>
        </section>

        {/* Tjänster */}
        <section id="tjanster" aria-labelledby="tjanster-rubrik" className="bg-meadow">
          <div className="behallare sektion">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 id="tjanster-rubrik" className="max-w-xl text-3xl sm:text-5xl">
                {tjanster.rubrik}
              </h2>
              <p className="max-w-md text-lg leading-relaxed">{tjanster.ingress}</p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tjanster.lista.map((t) => (
                <li key={t.titel} className="overflow-hidden rounded-kort bg-paper">
                  <div className="relative aspect-[4/3] w-full bg-meadow">
                    <Photo photo={t.bild} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg">{t.titel}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href={mailto("Trädgårds- eller skogstjänst")} className="knapp mt-10">
              Berätta vad du behöver hjälp med
            </a>
          </div>
        </section>

        {/* Galleri */}
        <section id="galleri" aria-labelledby="galleri-rubrik" className="behallare sektion">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="galleri-rubrik" className="text-3xl sm:text-5xl">
              {galleriText.rubrik}
            </h2>
            <p className="max-w-sm sm:text-right">{galleriText.text}</p>
          </div>
          <div className="mt-10">
            <Gallery photos={galleri} />
          </div>
        </section>

        <ContactBlock rubrik={kontakt.rubrik} text={kontakt.text} amne="Fråga till Björklunds Trädgård" knapptext="Skicka ett mejl" />
      </main>
    </>
  );
}
