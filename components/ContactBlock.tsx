import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { mailto, site, telLink } from "@/content/site";

type Props = { rubrik: string; text: string; amne: string; knapptext: string; id?: string };

export function ContactBlock({ rubrik, text, amne, knapptext, id = "kontakt" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="behallare pb-20 lg:pb-28">
      <div className="grid grid-cols-1 gap-10 rounded-stor bg-moss px-6 py-12 text-paper sm:px-12 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-16">
        <div>
          <h2 id={`${id}-rubrik`} className="text-3xl text-paper sm:text-4xl lg:text-5xl">
            {rubrik}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/80">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telLink} className="knapp bg-paper text-ink hover:bg-moss-soft">
              <Phone className="size-4" aria-hidden="true" />
              Ring {site.phone}
            </a>
            <a href={mailto(amne)} className="knapp bg-moss-deep hover:bg-ink">
              <Mail className="size-4" aria-hidden="true" />
              {knapptext}
            </a>
          </div>
        </div>

        <ul className="space-y-5 self-start rounded-kort bg-moss-deep/60 p-6 text-[0.9375rem] text-paper/80">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-gold-light" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-paper">{site.adress}</span>
              <a href={site.karta} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-paper">
                Visa på karta<span className="sr-only"> (öppnas i ny flik)</span>
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-gold-light" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-paper">Öppettider</span>
              {site.oppettider}
            </span>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-gold-light" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] font-medium text-paper underline underline-offset-4">
              {site.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
