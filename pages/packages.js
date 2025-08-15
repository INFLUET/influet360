import Head from "next/head";
import { useState } from "react";
import PackagePopupForm from "@/components/PackagePopupForm";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("starter-poster-pack");

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <Head>
        <title>Packages</title>
        <link rel="stylesheet" href="/style2.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <section className="program-section">
        <h1>Our Packages</h1>
        <p>Comprehensive packages to help you succeed !!</p>
        <div className="toggle-tabs">
          <button
            className={`tab-btn ${activeTab === "starter-poster-pack" ? "active" : ""}`}
            onClick={() => handleTabChange("starter-poster-pack")}
          >
            Starter Poster Pack
          </button>
          <button
            className={`tab-btn ${activeTab === "reels-pack" ? "active" : ""}`}
            onClick={() => handleTabChange("reels-pack")}
          >
            Reels Pack
          </button>
          <button
            className={`tab-btn ${activeTab === "digital-presence" ? "active" : ""}`}
            onClick={() => handleTabChange("digital-presence")}
          >
            Digital Presence
          </button>
        </div>
      </section>

      <section className="packages-container">
        {/* Starter Poster Pack */}
        <div
          className={`package-content ${
            activeTab === "starter-poster-pack" ? "active" : ""
          }`}
        >
          <div className="package-row">
            <div className="package-card">
              <div className="card-header">
                <h2>Starter Poster Pack</h2>
                <span className="discount">15% OFF</span>
              </div>
              <ul className="features">
                <li>📄 Posters, kit of grow brand</li>
              </ul>
              <div className="batch-info">
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Batch Starts 25
                  Aug 2025
                </p>
                <p className="seats-left">Last few seats left!</p>
              </div>
              <div className="price">
                <h3>
                  ₹1499/mo <span>₹2,100</span>
                </h3>
                <small>(Refund policy applicable)</small>
              </div>
              <PackagePopupForm packageName="Starter Poster Pack" />
              <div className="card-footer">
                <button>Request Callback</button>
                <button>Package Benefits</button>
              </div>
            </div>

            <div className="more-info-card">
              <h3>More About Package</h3>
              <ul className="info-list">
                <li>✅ Built for Local Brands. Backed by Results.</li>
                <li>✅ Real Local Growth, Not Just Likes</li>
                <li>✅ Lightning-Fast Turnaround</li>
                <li>✅ AI + Human Strategy</li>
                <li>✅ All-in-One Marketing Partner</li>
              </ul>
              <div className="review">
                <br />
                <p>⭐ 4.9/5 based on 65 reviews</p>
                <br />
                <p>
                  “This package helped me get into my dream college. Thanks to
                  the mentors!”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reels Pack */}
        <div
          className={`package-content ${
            activeTab === "reels-pack" ? "active" : ""
          }`}
        >
          <div className="package-row">
            <div className="package-card">
              <div className="card-header">
                <h2>Reels Pack</h2>
                <span className="discount">20% OFF</span>
              </div>
              <ul className="features">
                <li>✍️ 4 reels + 1 brand edit</li>
              </ul>
              <div className="batch-info">
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Batch Starts 1
                  Sep 2025
                </p>
                <p className="seats-left">Limited Premium Slots</p>
              </div>
              <div className="price">
                <h3>
                  ₹1,900 <span>₹2,500</span>
                </h3>
                <small>(Exclusive premium support included)</small>
              </div>
              <PackagePopupForm packageName="Reels Pack" />
              <div className="card-footer">
                <button>Request Callback</button>
                <button>Package Benefits</button>
              </div>
            </div>

            <div className="more-info-card">
              <h3>More About Reel Pack</h3>
              <ul className="info-list">
                <li>✅ Affordable Plans for Every Business</li>
                <li>✅ Small Business Supporters at Heart</li>
                <li>
                  ✅ Real-Time Support & WhatsApp-First Communication
                </li>
                <li>✅ Built for Local Brands. Backed by Results.</li>
                <li>✅ Real Local Growth, Not Just Likes</li>
              </ul>
              <div className="review">
                <br />
                <p>⭐ 5.0/5 based on 90 reviews</p>
                <br />
                <p>
                  “Absolutely worth it! The personal attention was a
                  game-changer.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Presence */}
        <div
          className={`package-content ${
            activeTab === "digital-presence" ? "active" : ""
          }`}
        >
          <div className="package-row">
            <div className="package-card">
              <div className="card-header">
                <h2>Digital Package</h2>
                <span className="discount">10% OFF</span>
              </div>
              <ul className="features">
                <li>✍️ GMB + Insta Setup + Posters</li>
              </ul>
              <div className="batch-info">
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Batch Starts 15
                  Aug 2025
                </p>
                <p className="seats-left">
                  Hurry! Budget-friendly seats available
                </p>
              </div>
              <div className="price">
                <h3>
                  ₹2,999 <span>₹4,000</span>
                </h3>
                <small>(Great value for budget-conscious students)</small>
              </div>
              <PackagePopupForm packageName="Digital Presence" />
              <div className="card-footer">
                <button>Request Callback</button>
                <button>Package Benefits</button>
              </div>
            </div>

            <div className="more-info-card">
              <h3>More About Digital Presence</h3>
              <ul className="info-list">
                <li>✅ Affordable Plans for Every Business</li>
                <li>✅ Small Business Supporters at Heart</li>
                <li>
                  ✅ Real-Time Support & WhatsApp-First Communication
                </li>
                <li>✅ Built for Local Brands. Backed by Results.</li>
                <li>✅ Lightning-Fast Turnaround</li>
              </ul>
              <div className="review">
                <br />
                <p>⭐ 4.5/5 based on 30 reviews</p>
                <br />
                <p>
                  “Perfect for those who need just the basics without burning a
                  hole in their pocket.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
