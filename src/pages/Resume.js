import React from "react";
import "../component/Resume.css";

const Resume = () => {
  const educationData = [
    {
      year: "2017 - 2021",
      institution: "Global Institute of Technology",
      title: "Bachelor of Technology: Computer Science and Engineering",
      description:
        "Completed B.Tech in Computer Science and Engineering with an average percentage of 80%.",
    },
  ];

  const experienceData = [
    {
      year: "2023 - Current",
      institution: "Accenture",
      title: "Developer Analyst",
      description:
        "Working on a Fashion brand ecommerce project to develop enhancements and maintain the backend of the application.",
    },
    {
      year: "2021 - 2022",
      institution: "Tata Consultancy Services",
      title: "SAP Hybris Developer",
      description:
        "Worked to develop and support a B2B Healthcare website backend system. Participated in a significant version upgrade from v2005 to v2211 of the Hybris platform. Implemented login functionality from scratch. Developed Java/Spring-based software that extends the Hybris platform to provide web/mobile applications and integrations with other systems.",
    },
    {
      year: "2020 - 2021",
      institution: "Inventcolabs Pvt. Ltd",
      title: "React Native Developer Intern",
      description:
        "Developed a queuing mechanism application to improve customer services and save customer time. Involved with all phases of mobile app development from initial concepts, through design, development, testing, and deployment. Successfully embedded Google Maps for locating nearby services.",
    },
    {
      year: "2020",
      institution: "Google",
      title: "Google Foobar Challenge Participant",
      description:
        "Completed Google Foobar Challenge up to Level 3, demonstrating problem-solving skills and coding proficiency.",
    },
  ];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Resume</h1>
        <span>8 Years of Experience</span>
      </header>
      <div className="resume-timeline">
        <div className="timeline-section">
          <h2 className="section-title">Education</h2>
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
        <div className="timeline-section">
          <h2 className="section-title">Experience</h2>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
      <section className="certificates">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          <div className="certificate-item">
            <h4>Psychology of Internation Design</h4>
            <p>Membership ID: XXXX</p>
            <p>19 April 2018</p>
          </div>
          <div className="certificate-item">
            <h4>Psychology of Internation Design</h4>
            <p>Membership ID: XXXX</p>
            <p>19 April 2018</p>
          </div>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h4>Design Skills</h4>
            <ul>
              <li>UI/UX Design</li>
              <li>Print Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="skill-item">
            <h4>Coding Skills</h4>
            <ul>
              <li>HTML / CSS</li>
              <li>PHP</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem = ({ year, institution, title, description }) => (
  <div className="timeline-item">
    <div className="yearInstituteContains">
      <div className="year">{year}</div>
      <div className="institution">{institution}</div>
    </div>
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
  </div>
);

export default Resume;
