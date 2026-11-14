"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "./Icons";

export default function SchedulerPreview() {
  const [activeDay, setActiveDay] = useState("Wednesday");

  const daysData: Record<string, Array<{ platform: string; title: string; time: string; status: string; type: string }>> = {
    Monday: [
      {
        platform: "Instagram",
        title: "Tokyo Cyberpunk Sunset Outfit Lookbook",
        time: "09:30 AM",
        status: "Published (140K Views)",
        type: "Reel",
      },
      {
        platform: "TikTok",
        title: "POV: Morning routine before Milan fashion shoot",
        time: "07:15 PM",
        status: "Published (88K Views)",
        type: "Clip",
      },
    ],
    Wednesday: [
      {
        platform: "TikTok",
        title: "Sound Sync: Outfit transition coffee to runway",
        time: "08:00 AM",
        status: "Ready to Auto-Publish",
        type: "Trending Audio",
      },
      {
        platform: "Instagram",
        title: "10-Photo High Fashion Editorial Carousel",
        time: "06:30 PM",
        status: "Scheduled (Peak Slot)",
        type: "Carousel",
      },
    ],
    Friday: [
      {
        platform: "YouTube",
        title: "30-Sec Workout Secret for Core Strength",
        time: "11:00 AM",
        status: "Queue Ready",
        type: "Shorts",
      },
      {
        platform: "Instagram",
        title: "Weekend Night Glamour & Paris Twilight",
        time: "07:45 PM",
        status: "Auto-DM Armed",
        type: "Reel",
      },
    ],
  };

  const days = ["Monday", "Wednesday", "Friday"];
  const currentPosts = daysData[activeDay] || daysData["Wednesday"];

  return (
    <section id="scheduler" className="scheduler-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>24/7 Autopilot</span>
          </div>
          <h2 className="section-title">
            Smart <span className="text-gradient">Content Calendar</span>
          </h2>
          <p className="section-desc">
            Schedule an entire month of viral reels and photoshoots in minutes. ViralForge automatically posts at the highest engagement moments.
          </p>
        </div>

        <div className="scheduler-container">
          {/* Day Tabs */}
          <div className="scheduler-tabs">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`scheduler-tab ${activeDay === day ? "active" : ""}`}
              >
                {day} Schedule
              </button>
            ))}
          </div>

          {/* Posts list */}
          <div className="scheduler-post-list">
            {currentPosts.map((post, idx) => (
              <div key={idx} className="scheduler-post">
                <div className="scheduler-post-info">
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "0.75rem",
                      background:
                        post.platform === "Instagram"
                          ? "rgba(217, 70, 239, 0.1)"
                          : post.platform === "TikTok"
                          ? "rgba(236, 72, 153, 0.1)"
                          : "rgba(239, 68, 68, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color:
                        post.platform === "Instagram"
                          ? "#d946ef"
                          : post.platform === "TikTok"
                          ? "#ec4899"
                          : "#ef4444",
                    }}
                  >
                    {post.platform === "Instagram" && <InstagramIcon className="w-5 h-5" />}
                    {post.platform === "TikTok" && <TikTokIcon className="w-5 h-5" />}
                    {post.platform === "YouTube" && <YoutubeIcon className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="scheduler-post-title">{post.title}</div>
                    <div className="scheduler-post-meta">
                      <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{post.platform} {post.type}</span>
                      <span>•</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                        <Clock style={{ width: "0.75rem", height: "0.75rem" }} />
                        {post.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="scheduler-badge-live">
                  {post.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
