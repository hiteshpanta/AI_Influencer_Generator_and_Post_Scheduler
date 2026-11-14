"use client";

import { Cpu, Calendar, Video, Wand2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "LoRA Face Consistency",
      desc: "Mathematical face-lock guarantees your virtual influencer has identical bone structure, eyes, and skin across thousands of different outfits, locations, and angles.",
      icon: Cpu,
    },
    {
      title: "Auto-Post Scheduler",
      desc: "Connect Instagram, TikTok, and YouTube. Queue your content weeks in advance and let our algorithm dispatch reels at the exact minute your audience is most active.",
      icon: Calendar,
    },
    {
      title: "4K Talking Video Reels",
      desc: "Transform static photos into realistic 60fps talking video reels with lifelike facial expressions, natural blinking, and fluent lip-syncing in 30+ languages.",
      icon: Video,
    },
    {
      title: "Viral Hooks & Auto-DM",
      desc: "Trained on millions of top-performing reels. Automatically generates curiosity-inducing hooks, trending sound wave matching, and instant automated DM replies.",
      icon: Wand2,
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">
            Built For Continuous <span className="text-gradient">Viral Reach</span>
          </h2>
          <p className="section-desc">
            Everything required to build, grow, and monetize a virtual influencer brand without expensive cameras, studios, or manual posting.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-icon-box">
                  <Icon style={{ width: "1.5rem", height: "1.5rem" }} />
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
