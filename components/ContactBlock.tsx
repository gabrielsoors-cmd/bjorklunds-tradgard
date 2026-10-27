import { Mail, MapPin, Phone } from "lucide-react";
import { mailto, site, telLink } from "@/content/site";

type Props = { rubrik: string; text: string; amne: string; knapptext: string; id?: string };

export function ContactBlock({ rubrik, text, amne, knapptext, id = "kontakt" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="behallare pb-20 lg:pb-28">
      <div className="rounded-stor bg-moss px-6 py-12 text-paper sm:px-12 sm:py-16 lg:px-16">
        <div className="max-w-2xl">
          <h2 id={`${id}-rubrik`} className="text-3xl text-paper sm:text-4xl lg:text-5xl">
            {rubrik}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto(amne)} className="knapp bg-paper text-ink hover:bg-moss-soft">
              <Mail className="size-4" aria-hidden="true" />
              {knapptext}
            </a>
            {site.phone ? (
              <a href={telLink(site.phone)} className="knapp bg-moss-deep hover:bg-ink">
                <Phone className="size-4" aria-hidden="true" />
                Ring {site.phone}
              </a>
            ) : null}
          </div>
          <ul className="mt-6 space-y-2 text-[0.9375rem] text-paper/75">
            <li>
              Eller mejla direkt till{" "}
              <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] font-medium text-paper underline underline-offset-4">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-light" aria-hidden="true" />
              {site.adress || site.ort}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
