"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Calendar,
  Globe,
  DollarSign,
  Zap,
} from "lucide-react";

// 4 background images — high quality model portraits from Unsplash
const BG_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80",
    alt: "AI Influencer — Fashion Model Persona",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=80",
    alt: "AI Influencer — Streetwear Editorial Persona",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1920&q=80",
    alt: "AI Influencer — Athletics Persona",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1920&q=80",
    alt: "AI Influencer — Luxury Lifestyle Persona",
  },
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cycle background every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="hero-restructured">
      {/* ── Background Slideshow ── */}
      <div className="hero-bg-slideshow">
        {BG_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            className={`hero-bg-slide${idx === bgIndex ? " active" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.url}
              alt={img.alt}
              className="hero-bg-slide-img"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* ── Dark Gradient Mask ── */}
      <div className="hero-bg-mask" />

      {/* ── Slide Indicator Dots ── */}
      <div className="hero-slide-dots">
        {BG_IMAGES.map((_, idx) => (
          <button
            key={idx}
            className={`hero-slide-dot${idx === bgIndex ? " active" : ""}`}
            onClick={() => setBgIndex(idx)}
            aria-label={`View background ${idx + 1}`}
          />
        ))}
      </div>

      {/* ── 3-Column Foreground Layout ── */}
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-fg-grid">

          {/* ── LEFT: Text & CTA ── */}
          <div className="hero-col-left">
            <div className="section-badge" style={{ alignSelf: "flex-start", marginBottom: 0 }}>
              <Sparkles style={{ width: "0.85rem", height: "0.85rem" }} />
              <span>AI Influencer Generator</span>
            </div>

            <h1 className="hero-col-title">
              Build Your{" "}
              <span className="text-gradient">AI Influencer</span>{" "}
              Empire
            </h1>

            <p className="hero-col-desc">
              Generate photorealistic virtual models with consistent facial
              likeness. Create viral 4K reels and schedule daily posts across
              Instagram, TikTok &amp; YouTube — on total autopilot.
            </p>

            <div>
              <a href="#pricing" className="btn-primary" style={{ padding: "0.9rem 1.9rem" }}>
                <span>Launch Free Persona</span>
                <ArrowRight style={{ width: "1.1rem", height: "1.1rem" }} />
              </a>
            </div>

            <div className="hero-feature-pills">
              <div className="hero-feature-pill">
                <CheckCircle2 style={{ width: "1rem", height: "1rem" }} />
                <span>100% Face &amp; Likeness Consistency (LoRA)</span>
              </div>
              <div className="hero-feature-pill">
                <CheckCircle2 style={{ width: "1rem", height: "1rem" }} />
                <span>Zero Cameras or Physical Photoshoots</span>
              </div>
              <div className="hero-feature-pill">
                <CheckCircle2 style={{ width: "1rem", height: "1rem" }} />
                <span>Auto-Post to Instagram, TikTok &amp; YouTube</span>
              </div>
            </div>
          </div>

          {/* ── CENTER: Promo Video (Phone Frame) ── */}
          <div className="hero-col-center">
            <div className="ad-video-container">
              <video
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-video-call-with-a-laptop-42999-large.mp4"
                poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="ad-video-element"
              />

              {/* Top badge */}
              <div className="ad-video-top-tag">
                <div className="ad-live-badge">
                  <span style={{ color: "#d946ef" }}>●</span> APP PROMO
                </div>
                <button
                  onClick={toggleMute}
                  style={{
                    background: "rgba(0,0,0,0.65)",
                    borderRadius: "50%",
                    padding: "0.35rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                  aria-label="Toggle Sound"
                >
                  {isMuted
                    ? <VolumeX style={{ width: "0.85rem", height: "0.85rem", color: "#fff" }} />
                    : <Volume2 style={{ width: "0.85rem", height: "0.85rem", color: "#d946ef" }} />
                  }
                </button>
              </div>

              {/* Bottom overlay */}
              <div className="ad-video-bottom">
                <div className="ad-promoter-title">
                  <span>Chloe Adams</span>
                  <span style={{ fontSize: "0.7rem", color: "#38bdf8", fontWeight: 800 }}>✓</span>
                  <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 400 }}>• Creator</span>
                </div>

                <p className="ad-promoter-caption">
                  &ldquo;I launched my AI model brand with ViralForge and
                  scheduled 30 days of viral reels in minutes!&rdquo;
                </p>

                <div className="ad-controls">
                  <span style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 600 }}>
                    ⚡ 520K Followers in 60 Days
                  </span>
                  <button
                    onClick={togglePlay}
                    style={{
                      background: "rgba(217,70,239,0.3)",
                      border: "1px solid rgba(217,70,239,0.6)",
                      borderRadius: "50%",
                      padding: "0.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Play/Pause"
                  >
                    {isPlaying
                      ? <Pause style={{ width: "0.85rem", height: "0.85rem", color: "#fff" }} />
                      : <Play style={{ width: "0.85rem", height: "0.85rem", color: "#fff" }} />
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Feature Cards ── */}
          <div className="hero-col-right">
            <div className="section-badge" style={{ alignSelf: "flex-start", marginBottom: 0 }}>
              <Zap style={{ width: "0.85rem", height: "0.85rem" }} />
              <span>24/7 Autonomous Growth</span>
            </div>

            <div className="hero-right-card">
              <div className="hero-card-icon-title">
                <Calendar style={{ width: "1.1rem", height: "1.1rem", color: "#d946ef" }} />
                <span>Autonomous Post Scheduler</span>
              </div>
              <p className="hero-card-desc">
                Posts daily 4K reels and carousels automatically at your
                audience&apos;s peak viral windows — no phone required.
              </p>
            </div>

            <div className="hero-right-card">
              <div className="hero-card-icon-title">
                <Globe style={{ width: "1.1rem", height: "1.1rem", color: "#38bdf8" }} />
                <span>Multilingual 4K Lip-Sync</span>
              </div>
              <p className="hero-card-desc">
                Your virtual models speak 30+ languages with natural expressions
                to reach worldwide sponsors and followers.
              </p>
            </div>

            <div className="hero-right-card">
              <div className="hero-card-icon-title">
                <DollarSign style={{ width: "1.1rem", height: "1.1rem", color: "#34d399" }} />
                <span>Instant Sponsorship Deals</span>
              </div>
              <p className="hero-card-desc">
                Automated media kits and DM flows that convert fan views into
                affiliate income and brand partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
