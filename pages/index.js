// // pages/index.js
// import Head from "next/head";
// import PopupForm from "@/components/PopupForm";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Influet360 - Grow Your Business</title>
//       </Head>

//       <main>
//         <nav className="navbar">
//           <div className="brand">
//             <span className="influet">INFLUET</span>
//             <span className="three-sixty">360</span>
//           </div>

//           <div className="nav-links">
//             <a href="#home" className="btn white-btn">Home</a>
//             <a href="#about" className="btn white-btn">About Us</a>
//             <a href="#services" className="btn white-btn">Services</a>
//             <a href="#portfolio" className="btn white-btn">Portfolio</a>
//             <a href="#contact" className="btn white-btn">📞Contact Us</a>
//             <PopupForm />
//             {/* <a href="#" className="btn yellow-btn">Packages</a> */}
//             <a href="/packages" className="btn yellow-btn">Packages</a>
//           </div>
//         </nav>

//         <section id="home">
//             <div className="info-bar">
//               <div className="scrolling-text">
//                 <span>🚀 Grow Your Business with INFLUET360</span>
//                 <span>🎯 Affordable Digital Marketing for Local Brands</span>
//               </div>
//             </div>

//             <div className="hero-section">
//               <div className="hero-container">
//                 <div className="hero-content">
//                   <h1>Grow Your Local Business<br />with Viral Marketing</h1>
//                   <p>From reels to reach, branding to buzz — we do it all,</p>
//                   <div className="hero-buttons">
//                     <PopupForm />
//                     <a
//                       href="https://wa.me/919420543357?text=Hi%20Team%2C%20I%20am%20interested%20in%20a%20free%20demo"
//                       className="btn outline-btn"
//                       target="_blank"
//                     >
//                       Talk to Us on WhatsApp
//                     </a>
//                   </div>
//                 </div>
//                 <div className="hero-image">
//                   <img src="/Background2.jpeg" alt="Marketing Illustration" />
//                 </div>
//               </div>
//             </div>
//         </section>

//         <section id="about" className="about-us">
//           <div className="about-container">
//             <div className="about-image">
//               <img src="/BGIMG.jpeg" alt="About Influet360" />
//             </div>
//             <div className="about-text">
//               <h2><i className="fa-solid fa-circle-info" style={{ fontSize: 27, color: "#66184c" }}></i> About Us</h2>
//               <p><strong>Creativity That Connects, Marketing That Matters !!</strong></p>
//               <br></br>
//               <p>
//                 We believe every local business has the potential to shine - it just needs the right
//                 visibility, voice, and visual presence. We’re a creative growth partner for local shops, startups,
//                 and service providers who want to compete smartly in the digital world.
//               </p>
//               <br></br>
//               <br></br>
//               <div className="vision-mission">
//                 <div className="vision">
//                   <h3><i className="fa-solid fa-star" style={{ fontSize: 25, color: "#66184c" }}></i> Our Vision</h3>
//                   <p>
//                     To empower local and growing businesses with impactful, affordable, and creative marketing -
//                     tailored for the Indian audience.
//                   </p>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="mission">
//                   <h3><i className="fa-solid fa-trophy" style={{ fontSize: 25, color: "#66184c" }}></i> Our Mission</h3>
//                   <p>
//                     Deliver creative, consistent, and conversion-focused marketing that fits every budget.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="services" className="services-section">
//           <h2>Our Services</h2>
//           <div className="services-grid">
//             <div className="service-card">
//               <i className="fa-solid fa-calendar" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Festival Poster Packages</p>
//             </div>
//             <div className="service-card">
//               <i className="fa-brands fa-youtube" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Business Reels & Shorts</p>
//             </div>
//             <div className="service-card">
//               <i className="fa-solid fa-chart-line" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Local SEO & Google Business</p>
//             </div>
//             <div className="service-card">
//               <i className="fa-solid fa-store" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Website +<br />E-commerce Setup</p>
//             </div>
//             <div className="service-card">
//               <i className="fa-solid fa-cart-plus" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Website +<br />Ecommerce Setup</p>
//             </div>
//             <div className="service-card">
//               <i className="fa-solid fa-pen-ruler" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
//               <p>Branding Kits & Logo Design</p>
//             </div>
//           </div>
//           <div className="explore-btn-container">
//             <a href="#" className="explore-btn">Explore All Services</a>
//           </div>
//         </section>

//         <section id="portfolio" className="section_container">
//           <h1>What Our Customers Say</h1>
//           <div className="section_grid">
//             {["ABC", "XYZ", "MNO"].map((name, idx) => (
//               <div className="section_card" key={idx}>
//                 <span><i className="ri-double-quotes-l"></i></span>
//                 <h4>EXCELLENT</h4>
//                 <p>
//                   They understood our brand and created a stunning website design.
//                   Professional, responsive, and on-time delivery. Highly recommended
//                 </p>
//                 <img src="/image.jpeg" alt="user" />
//                 <h5>{name}</h5>
//                 <h6>{name === "ABC" ? "MD" : name === "XYZ" ? "CEO" : "DEVELOPER"}</h6>
//               </div>
//             ))}
//           </div>
//         </section>


//         <footer id="contact" className="footer">
//           <div className="footer-top">
//             <div className="footer-column">
//               <div className="footer-logo">
//                 <img
//                   src="logo.png"
//                   alt="logo"
//                 />
//                 <h2>
//                   <span className="influet">INFLUET</span>
//                   <span className="three-sixty">360</span>
//                 </h2>
//               </div>
//               <p className="footer-description">Your Local Brand. Our Viral Strategy !!</p>
//               <div className="footer-social">
//                 <a href="#"><i className="fab fa-instagram" style={{ color: "rgb(225, 48, 108)" }}></i></a>
//                 <a href="#"><i className="fab fa-linkedin-in" style={{ color: "#0077B5" }}></i></a>
//                 <a href="#"><i className="fab fa-youtube" style={{ color: "#FF0000" }}></i></a>
//               </div>
//             </div>

//             <div className="footer-column">
//               <h3>📜Our Policies</h3>
//               <ul>
//                 <li><a href="#">Privacy Policy</a></li>
//                 <li><a href="#">Terms and Conditions</a></li>
//                 <li><a href="#">Refund Policy</a></li>
//               </ul>
//             </div>

//             <div className="footer-column">
//               <h3>📞Contact Us</h3>
//               <ul className="contact-info">
//                 <li><i className="fas fa-location-dot"></i> 1516, Anand Co Op Housing Society Malkapur, Buldhana, Maharashtra 443101</li>
//                 <li><i className="fas fa-phone"></i> +91 9420543357</li>
//                 <li>
//                   <i className="fas fa-envelope"></i>
//                   <a
//                     href="https://mail.google.com/mail/?view=cm&to=influet.help360@gmail.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     influet.help360@gmail.com
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <hr />

//           <div className="footer-bottom">
//             <p>© 2025 INFLUET360. All rights reserved.</p>
//             <p>
//               Marketing with <span className="heart">❤️</span>{" "}
//               <a href="#">@INFLUET360</a>
//             </p>
//           </div>
//         </footer>
//       </main>
//     </>
//   );
// }


// pages/index.js
import Head from "next/head";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Influet360 - Grow Your Business</title>
      </Head>

      <main>
        <nav className="navbar">
          <div className="brand">
            <span className="influet">INFLUET</span>
            <span className="three-sixty">360</span>
          </div>

          <div className="nav-links">
            <a href="#home" className="btn white-btn">Home</a>
            <a href="#about" className="btn white-btn">About Us</a>
            <a href="#services" className="btn white-btn">Services</a>
            <a href="#portfolio" className="btn white-btn">Portfolio</a>
            <a href="#contact" className="btn white-btn">📞Contact Us</a>
            <PopupForm />
            {/* <a href="#" className="btn yellow-btn">Packages</a> */}
            <a href="/packages" className="btn yellow-btn">Packages</a>
          </div>
        </nav>

        <section id="home">
            <div className="info-bar">
              <div className="scrolling-text">
                <span>🚀 Grow Your Business with INFLUET360</span>
                <span>🎯 Affordable Digital Marketing for Local Brands</span>
              </div>
            </div>

            <div className="hero-section">
              <div className="hero-container">
                <div className="hero-content">
                  <h1>Grow Your Local Business<br />with Viral Marketing</h1>
                  <p>From reels to reach, branding to buzz — we do it all,</p>
                  <div className="hero-buttons">
                    <PopupForm />
                    <a
                      href="https://wa.me/919420543357?text=Hi%20Team%2C%20I%20am%20interested%20in%20a%20free%20demo"
                      className="btn outline-btn"
                      target="_blank"
                    >
                      Talk to Us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="hero-image">
                  <img src="/Background2.jpeg" alt="Marketing Illustration" />
                </div>
              </div>
            </div>
        </section>

        <section id="about" className="about-us">
          <div className="about-container">
            <div className="about-image">
              <img src="/BGIMG.jpeg" alt="About Influet360" />
            </div>
            <div className="about-text">
              <h2><i className="fa-solid fa-circle-info" style={{ fontSize: 27, color: "#66184c" }}></i> About Us</h2>
              <p><strong>Creativity That Connects, Marketing That Matters !!</strong></p>
              <br></br>
              <p>
                We believe every local business has the potential to shine - it just needs the right
                visibility, voice, and visual presence. We’re a creative growth partner for local shops, startups,
                and service providers who want to compete smartly in the digital world.
              </p>
              <br></br>
              <br></br>
              <div className="vision-mission">
                <div className="vision">
                  <h3><i className="fa-solid fa-star" style={{ fontSize: 25, color: "#66184c" }}></i> Our Vision</h3>
                  <p>
                    To empower local and growing businesses with impactful, affordable, and creative marketing -
                    tailored for the Indian audience.
                  </p>
                </div>
                <br></br>
                <br></br>
                <div className="mission">
                  <h3><i className="fa-solid fa-trophy" style={{ fontSize: 25, color: "#66184c" }}></i> Our Mission</h3>
                  <p>
                    Deliver creative, consistent, and conversion-focused marketing that fits every budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-calendar" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Festival Poster Packages</p>
            </div>
            <div className="service-card">
              <i className="fa-brands fa-youtube" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Business Reels & Shorts</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-chart-line" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Local SEO & Google Business</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-store" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Website +<br />E-commerce Setup</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-cart-plus" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Website +<br />Ecommerce Setup</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-pen-ruler" style={{ fontSize: 45, color: "#3E2F7E" }}></i>
              <p>Branding Kits & Logo Design</p>
            </div>
          </div>
          <div className="explore-btn-container">
            <a href="#" className="explore-btn">Explore All Services</a>
          </div>
        </section>

        <section id="portfolio" className="section_container">
          <h1>What Our Customers Say</h1>
          <div className="section_grid">
            {["ABC", "XYZ", "MNO"].map((name, idx) => (
              <div className="section_card" key={idx}>
                <span><i className="ri-double-quotes-l"></i></span>
                <h4>EXCELLENT</h4>
                <p>
                  They understood our brand and created a stunning website design.
                  Professional, responsive, and on-time delivery. Highly recommended
                </p>
                <img src="/image.jpeg" alt="user" />
                <h5>{name}</h5>
                <h6>{name === "ABC" ? "MD" : name === "XYZ" ? "CEO" : "DEVELOPER"}</h6>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="footer">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <img
                  src="logo.png"
                  alt="logo"
                />
                <h2>
                  <span className="influet">INFLUET</span>
                  <span className="three-sixty">360</span>
                </h2>
              </div>
              <p className="footer-description">Your Local Brand. Our Viral Strategy !!</p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-instagram" style={{ color: "rgb(225, 48, 108)" }}></i></a>
                <a href="#"><i className="fab fa-linkedin-in" style={{ color: "#0077B5" }}></i></a>
                <a href="#"><i className="fab fa-youtube" style={{ color: "#FF0000" }}></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>📜Our Policies</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>📞Contact Us</h3>
              <ul className="contact-info">
                <li><i className="fas fa-location-dot"></i> 1516, Anand Co Op Housing Society Malkapur, Buldhana, Maharashtra 443101</li>
                <li><i className="fas fa-phone"></i> +91 9420543357</li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=influet.help360@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    influet.help360@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <p>© 2025 INFLUET360. All rights reserved.</p>
            <p>
              Marketing with <span className="heart">❤️</span>{" "}
              <a href="#">@INFLUET360</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}