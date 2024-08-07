import React from "react";
import "../component/ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailchimp,
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import backgroundImage from "../asset/background.png";

const contacts = [
  {
    title: "Email me at",
    icon: faMailchimp,
    link: "mailto:jain.yash1909@gmail.com",
    description: "You can reach me via email for any inquiries.",
    buttonText: "Send Email",
  },
  {
    title: "LinkedIn Profile",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/yash-jain-869144b1/",
    description: "Connect with me on LinkedIn.",
    buttonText: "View LinkedIn",
  },
  {
    title: "GitHub Profile",
    icon: faGithub,
    link: "https://github.com/dicusa",
    description: "Check out my projects on GitHub.",
    buttonText: "View GitHub",
  },
  {
    title: "Medium Blog",
    icon: faMedium,
    link: "https://medium.com/@jain.yash1909",
    description: "Read my latest articles on Medium.",
    buttonText: "Read Blog",
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>Contact Me</h1>
      </header>
      <section id="github" className="section">
        <p>Reach me out via.</p>
        <div className="contact-cards">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={contact.icon} size="2x" />
              </div>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              <a href={contact.link} className="cta-button">
                {contact.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
