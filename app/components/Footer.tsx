"use client";

import Link from "next/link";
import { Bot } from "lucide-react";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link href="/" className="nav-brand">
            <div className="nav-brand-icon" style={{ width: "2rem", height: "2rem" }}>
              <Bot style={{ width: "1.1rem", height: "1.1rem" }} />
            </div>
            <span className="nav-brand-title" style={{ fontSize: "1.1rem" }}>
              ViralForge<span className="text-gradient">.AI</span>
            </span>
          </Link>

          <p className="footer-copy">
            © {new Date().getFullYear()} ViralForge AI. All rights reserved. Autonomous AI Influencers & Scheduler.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-muted)" }}>
            <a href="#" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
