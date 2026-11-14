"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will Instagram or TikTok ban accounts posting AI influencers?",
      a: "No. Virtual creators are fully permitted across Meta and TikTok guidelines. ViralForge publishes directly through official platform APIs, ensuring reliable compliance with zero shadowbans.",
    },
    {
      q: "How does face consistency work across different outfits and scenes?",
      a: "ViralForge trains a custom LoRA identity file for each persona. This locks facial geometry, bone structure, eye shape, and skin markers so the influencer looks identical across all photos and videos.",
    },
    {
      q: "Can the AI influencer generate speaking videos and lip-sync?",
      a: "Yes! The video engine generates fluid 60fps talking head videos with natural blinking, facial expressions, and multilingual lip-syncing from any text prompt or custom audio clip.",
    },
    {
      q: "Do I own the intellectual property and commercial rights?",
      a: "Yes. You hold 100% full commercial ownership of the persona, generated images, reels, and voice clones for brand sponsorships, digital subscriptions, and merchandise.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-desc">
            Quick answers about building virtual personas and automated social publishing.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="faq-question"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen ? "#d946ef" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
