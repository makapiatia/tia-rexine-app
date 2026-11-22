import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialCardSize = { width: 1200, height: 630 };

export const socialCardAlt =
  "Tia Rexine, hand-lettered over pink sunset clouds and desert mountains, with the tagline " +
  "\"Full stack software engineer in the Sonoran desert\" and a T-rex badge.";

const asset = (file: string) => readFile(join(process.cwd(), "assets/og", file));
const dataUri = (buffer: Buffer, type: string) => `data:${type};base64,${buffer.toString("base64")}`;

export async function renderSocialCard() {
  const [background, name, badge] = await Promise.all([asset("background.jpg"), asset("name.png"), asset("badge.png")]);

  return new ImageResponse(
    (
      <div
        style={{ position: "relative", display: "flex", width: "100%", height: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUri(background, "image/jpeg")}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute" }}
        />
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 96,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dataUri(name, "image/png")} alt="" width={620} height={154} />
          <div style={{ marginTop: 22, fontSize: 34, color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}>
            Full stack software engineer in the Sonoran desert
          </div>
          <div style={{ marginTop: 14, fontSize: 26, color: "#fde7c2", textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}>
            tiarexine.com
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUri(badge, "image/png")}
          alt=""
          width={150}
          height={150}
          style={{ position: "absolute", right: 72, bottom: 72 }}
        />
      </div>
    ),
    socialCardSize,
  );
}
