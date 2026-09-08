import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#06060f",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(0,74,173,0.35), transparent 60%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #338bff, #ffc619)",
              fontSize: 28,
              fontWeight: 700,
              color: "#06060f",
            }}
          >
            A
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
            {siteConfig.shortName}
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Fill every batch with paid enrollments
        </div>
      </div>
    ),
    { ...size }
  );
}
