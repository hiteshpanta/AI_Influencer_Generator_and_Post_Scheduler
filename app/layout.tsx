import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViralForge.AI — AI Influencer Generator & Autonomous Social Post Scheduler",
  description:
    "Create photorealistic, consistent AI influencers and automate 24/7 post scheduling across Instagram, TikTok, YouTube Shorts, and X.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
