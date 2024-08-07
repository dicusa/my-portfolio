import React from "react";
import "../component/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../asset/profilePic.png"; // Update with the correct path to your profile picture
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="about-me">
      <header className="hero-section">
        <div className="hero-content">
          <img src={profilePic} alt="Yash Jain" className="profile-pic" />
          <div className="hero-additon">
            <h1>Yash Jain</h1>
            <p>Aspiring Solution Architect | Developer Analyst</p>
            <div className="hero-buttons">
              <NavLink to="/resume" className="btn">
                Resume
              </NavLink>
              <NavLink to="/contact" className="btn">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <section className="section what-i-do">
        <h2>What I Do</h2>
        <p>
          I specialize in developing scalable e-commerce applications and
          architecting solutions for complex business problems. My expertise
          includes system design, database management, and full-stack
          development.
        </p>
      </section>

      <section class="testimonials-section">
        <h2>Testimonials</h2>
        <div class="testimonials-container">
          <div class="testimonial">
            <img
              src="/api/placeholder/50/50"
              alt="Melanie Tan"
              class="testimonial-image"
            />
            <div class="testimonial-content">
              <span class="quote-mark quote-left">"</span>
              <p>
                Yash is an extraordinary individual with extensive knowledge in
                Backoffice. He supported the BD Biosciences website in
                troubleshooting and resolving issues and he was heavily involved
                in key projects and enhancements. Without a doubt, he’s
                dependable and reliable and I would love to work with him again.
              </p>
              <span class="quote-mark quote-right">"</span>
            </div>
            <div class="testimonial-author">Melanie Tan</div>
            <div class="testimonial-position">
              Global Channel Manager, eProcurement at BD
            </div>
          </div>
          <div class="testimonial">
            <img
              src="/api/placeholder/50/50"
              alt="Imran Kabir"
              class="testimonial-image"
            />
            <div class="testimonial-content">
              <span class="quote-mark quote-left">"</span>
              <p>
                Yash is an asset that you don't want to lose. For a person who
                is young and early into his career, he has shown exceptional
                maturity in handling complex projects, navigating the team, and
                dealing with very tough business folk by demonstrating great
                skills by quickly grasping technical know-how on a SAP Hybris
                Cloud Commerce v2 technology-based project. It's been an amazing
                journey while it lasted, wish it would have lasted longer.
              </p>
              <span class="quote-mark quote-right">"</span>
            </div>
            <div class="testimonial-author">Imran Kabir</div>
            <div class="testimonial-position">
              Seasoned IT Project/Program Manager
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section contact-info">
        <h2>Contact Information</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> yash.jain@example.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +91-1234567890
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yash-jain-869144b1/"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/dicusa" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
