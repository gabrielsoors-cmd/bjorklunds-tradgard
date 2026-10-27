import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sidan finns inte | Björklunds Trädgård",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="innehall" className="behallare flex flex-1 flex-col items-start py-24 lg:py-32">
        <span className="bricka bg-gold-soft text-gold">404</span>
        <h1 className="mt-5 text-5xl sm:text-6xl">Sidan finns inte</h1>
        <p className="ingress mt-5 max-w-xl">Den kan ha flyttat, eller så har adressen blivit fel.</p>
        <Link href="/" className="knapp mt-9">
          Till startsidan
        </Link>
      </main>
    </>
  );
}
