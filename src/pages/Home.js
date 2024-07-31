import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../component/About.css";
import "../asset/profilePic.png";
const Home = () => {
  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-photo">
          <img
            src="https://avatars.githubusercontent.com/u/57257390?s=400&u=56dae22cc239bf4bb07a7f492c3d371fe80e8cb7&v=4"
            alt="Your Name"
          />
        </div>
        <div className="profile-details">
          <h1>Yash Jain</h1>
          <p>Full Stack Developer</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:youremail@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Job Title</h3>
          <p>Company Name</p>
          <p>Job Description and responsibilities</p>
        </div>
        {/* Add more experiences as needed */}
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Degree</h3>
          <p>Institution Name</p>
          <p>Description and achievements</p>
        </div>
        {/* Add more education details as needed */}
      </section>
    </div>
  );
};

export default Home;
