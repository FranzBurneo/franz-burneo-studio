import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Franz Burneo Studio - Desarrollo web y software para negocios";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 56,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "stretch",
            background: "linear-gradient(135deg, #0f172a 0%, #111827 58%, #1d4ed8 100%)",
            borderRadius: 42,
            display: "flex",
            flexDirection: "column",
            gap: 34,
            height: "100%",
            justifyContent: "center",
            padding: 72,
            width: "100%",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 24 }}>
            <div
              style={{
                alignItems: "center",
                background: "#ffffff",
                borderRadius: 24,
                color: "#0f172a",
                display: "flex",
                fontSize: 42,
                fontWeight: 900,
                height: 96,
                justifyContent: "center",
                letterSpacing: -4,
                width: 96,
              }}
            >
              FB
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 40, fontWeight: 800 }}>
                Franz Burneo Studio
              </div>
              <div style={{ color: "#bfdbfe", fontSize: 24, fontWeight: 600 }}>
                Desarrollo web y software para negocios
              </div>
            </div>
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.02 }}>
            Páginas web, menús digitales y agenda online
          </div>
          <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
            {["Páginas web", "Menús digitales", "Agenda online"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  color: "#ffffff",
                  fontSize: 28,
                  fontWeight: 700,
                  padding: "14px 24px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
