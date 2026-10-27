import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Delningsbild för sociala medier.
export const alt = "Björklunds Trädgård: plantor, amplar och trädgårdstjänster i Älvdalen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [serif, sans, logo] = await Promise.all([
  readFile(join(process.cwd(), "assets/young-serif-latin-400-normal.woff")),
  readFile(join(process.cwd(), "assets/figtree-latin-500-normal.woff")),
  readFile(join(process.cwd(), "assets/logo-og.png"), "base64"),
]);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#f1f4ee",
          padding: 64,
          gap: 64,
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={440} height={450} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontFamily: "Young Serif", fontSize: 72, color: "#1d2a20", lineHeight: 1.05 }}>
            Björklunds Trädgård
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontFamily: "Figtree",
              fontSize: 34,
              color: "#586356",
              lineHeight: 1.3,
            }}
          >
            Plantor, amplar och trädgårdstjänster i Älvdalen
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              alignSelf: "flex-start",
              padding: "14px 28px",
              borderRadius: 999,
              background: "#2e5233",
              color: "#ffffff",
              fontFamily: "Figtree",
              fontSize: 26,
            }}
          >
            bjorklundstradgard.se
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Young Serif", data: serif, style: "normal", weight: 400 },
        { name: "Figtree", data: sans, style: "normal", weight: 500 },
      ],
    },
  );
}
