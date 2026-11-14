"use client";

import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      desc: "Ideal for testing your first AI influencer persona and automated scheduling.",
      popular: false,
      features: [
        "1 AI Influencer Persona",
        "250 4K Photoshoots / month",
        "30 Talking Video Reels",
        "Auto-post to Instagram & TikTok",
        "Peak-Time Schedule Queue",
        "Full Commercial Rights",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Pro Creator",
      price: "$79",
      desc: "Our most popular package for full multi-platform automated growth.",
      popular: true,
      features: [
        "3 AI Influencer Personas",
        "Unlimited 4K Photoshoots",
        "150 4K Video Reels + Voice Clone",
        "Auto-post to IG, TikTok & YouTube",
        "Auto-DM & Comment Engagement Bot",
        "Trending Audio & Sound Sync",
        "Priority High-Speed GPU Renders",
      ],
      cta: "Claim Pro Trial",
    },
    {
      name: "Agency",
      price: "$199",
      desc: "For talent agencies and brands scaling multiple virtual rosters.",
      popular: false,
      features: [
        "10 AI Influencer Personas",
        "Unlimited 4K Video Reels",
        "All Platforms + Multiple Accounts",
        "Custom LoRA Face Tuning",
        "Full API & Webhook Access",
        "Dedicated Account Concierge",
      ],
      cta: "Contact Agency Sales",
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Simple Pricing</span>
          </div>
          <h2 className="section-title">
            Predictable <span className="text-gradient">Plans</span>
          </h2>
          <p className="section-desc">
            All plans include a 7-day risk-free trial. Upgrade, downgrade, or cancel anytime with one click.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div>
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>

                <div className="pricing-price">
                  <span className="price-num">{plan.price}</span>
                  <span className="price-cycle">/ month</span>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="pricing-feature">
                      <Check className="pricing-feature-icon" style={{ width: "1rem", height: "1rem" }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="#"
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
