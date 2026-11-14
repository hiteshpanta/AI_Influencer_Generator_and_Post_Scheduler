"use client";

import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Brand */}
          <Link href="/" className="nav-brand">
            <div className="nav-brand-icon">
              <Bot style={{ width: "1.25rem", height: "1.25rem" }} />
            </div>
            <span className="nav-brand-title">
              ViralForge<span className="text-gradient">.AI</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#scheduler" className="nav-link">Scheduler</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          {/* Action Button */}
          <div className="nav-actions">
            <a href="#pricing" className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
              <span>Get Started</span>
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
