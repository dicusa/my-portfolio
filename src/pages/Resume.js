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
        "Working on a Fashion brand ecommerce project to develop and maintain the backend of the application.",
    },
    {
      year: "2021 - 2023",
      institution: "Tata Consultancy Services",
      title: "SAP Hybris Developer",
      description:
        "Worked to develop and support a B2B Healthcare website backend system. Lead significant version upgrade from v2005 to v2211 of the Hybris platform. Implemented login functionality from scratch. Developed Java/Spring-based software that extends the Hybris platform to provide web/mobile applications and integrations with other systems.",
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
  const designSkills = [
    { skill: "Spring Boot", percentage: 60 },
    { skill: "React Native", percentage: 75 },
    { skill: "React JS", percentage: 60 },
    { skill: "Node + Express JS", percentage: 50 },
    {
      skill: "Experience in Agile /Scrum-based,software-based methodology",
      percentage: 80,
    },
  ];

  const codingSkills = [
    { skill: "Python", percentage: 90 },
    { skill: "JAVA", percentage: 75 },
    { skill: "JavaScript", percentage: 85 },
    { skill: "SQL", percentage: 70 },
    { skill: "HTML / CSS", percentage: 80 },
  ];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Resume</h1>
        <span>3 Years of Experience</span>
      </header>
      <div className="resume-timeline">
        <div className="timeline-section">
          <h2 className="section-title">Experience</h2>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
        <div className="timeline-section">
          <h2 className="section-title">Education</h2>
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
      <section className="skills-section">
        <div className="skills-chart">
          <div className="skills-column">
            <h2 className="section-title">FrameWork / Process</h2>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          <div className="skills-column">
            <h2 className="section-title">Coding Language</h2>
            {codingSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
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

const SkillBar = ({ skill, percentage }) => (
  <div className="skill-bar">
    <div className="skill-info">
      <span className="skill-name">{skill}</span>
      <span className="skill-percentage">{percentage}%</span>
    </div>
    <div className="skill-progress">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default Resume;
