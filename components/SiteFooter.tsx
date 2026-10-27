import Link from "next/link";
import { site, telLink } from "@/content/site";
import { Logo } from "./Logo";

const LANKAR = [
  ["Plantor och blommor", "/#plantor"],
  ["Amplar och krukor", "/#amplar"],
  ["Självplock", "/#sjalvplock"],
  ["Trädgårds- och skogstjänster", "/#tjanster"],
  ["Galleri", "/#galleri"],
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-moss-deep text-paper/75">
      <div className="behallare grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div className="flex items-start gap-4">
          <Logo decorative sizes="80px" className="h-20 w-auto shrink-0" />
          <div>
            <p className="font-serif text-xl text-paper">Björklunds Trädgård</p>
            <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed">
              Egenodlade plantor, amplar och trädgårdstjänster i {site.ort}.
            </p>
          </div>
        </div>

        <nav aria-label="Sidfot">
          <p className="font-semibold text-paper">På sidan</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {LANKAR.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-paper">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-paper">Kontakt</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] transition-colors hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={telLink} className="transition-colors hover:text-paper">
                {site.phone}
              </a>
            </li>
            <li>{site.adress}</li>
            <li className="pt-2 text-sm text-paper/60">Öppettiderna varierar. Hör av dig innan du kommer.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="behallare flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© Björklunds Trädgård, enskild firma i {site.ort}. Innehar F-skatt.</p>
          <p>Webbplatsen använder inga kakor.</p>
        </div>
      </div>
    </footer>
  );
}
