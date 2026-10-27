"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mailto } from "@/content/site";
import { Logo } from "./Logo";

const LANKAR = [
  { label: "Plantor", href: "/#plantor" },
  { label: "Amplar", href: "/#amplar" },
  { label: "Självplock", href: "/#sjalvplock" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Galleri", href: "/#galleri" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const cta = { label: "Kontakta mig", href: mailto("Fråga till Björklunds Trädgård") };

  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow"
      >
        Hoppa till innehållet
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="behallare flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link href="/" onClick={close} className="flex shrink-0 items-center gap-2.5" aria-label="Björklunds Trädgård, till toppen">
            <Logo decorative eager sizes="44px" className="h-10 w-auto lg:h-11" />
            <span className="font-serif text-lg text-ink">Björklunds Trädgård</span>
          </Link>

          <nav aria-label="Huvudmeny" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9375rem] font-medium">
              {LANKAR.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink/80 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={cta.href} className="knapp min-h-10 px-5 py-2 text-[0.9375rem]">
                  {cta.label}
                </a>
              </li>
            </ul>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-meadow lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? "Stäng menyn" : "Öppna menyn"}</span>
          </button>
        </div>
      </header>

      {/* Ligger utanför <header>, eftersom headerns oskärpa (backdrop-filter) annars låser fast panelen i headern. */}
      <div id="mobilmeny" hidden={!open} className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper lg:hidden">
        <nav aria-label="Mobilmeny" className="behallare flex min-h-full flex-col py-6">
          <ul className="divide-y divide-line">
            {LANKAR.map((l, i) => (
              <li key={l.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  onClick={close}
                  className="block py-4 font-serif text-2xl text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <a href={cta.href} onClick={close} className="knapp w-full">
              {cta.label}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
