import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Usury — They want you to stay in debt. We fight back.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#0A0A0A",
          borderTop: "4px solid #C0392B",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 8,
            color: "#C0392B",
            marginBottom: 60,
          }}
        >
          USURY
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#F2F0ED",
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          They want you to stay in debt.
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#C0392B",
            fontStyle: "italic",
            lineHeight: 1.2,
          }}
        >
          We fight back.
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: 3,
            color: "#888888",
            marginTop: 60,
          }}
        >
          COMING 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
