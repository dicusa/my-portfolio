import React from "react";
import "../component/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const educationData = [
    {
      year: "Aug 2017 - Sep 2021",
      institution: "Global Institute of Technology",
      title: "B.Tech. in Computer Science and Engineering",
      description: "GPA: 8.0/10",
    },
  ];

  const certificationData = [
    {
      year: "Nov 2024",
      institution: "SAP",
      title: "SAP Certified Professional - Developer (SAP Commerce Cloud)",
      description: "Validated advanced technical skills and expertise to design, develop, and implement solutions using SAP Commerce Cloud Suite in complex enterprise environments",
    },
  ];

  const experienceData = [
    {
      year: "Dec 2023 - Present",
      institution: "Accenture",
      title: "Developer Analyst",
      description:
        "• Migrated a monolithic B2B platform to a headless microservices architecture using Spring Boot and Java, improving scalability by 40%.\n• Reduced API latency on a high-traffic B2C site by optimizing PostgreSQL queries and implementing caching strategies, improving response time by 35%.\n• Built robust multi-region data migration pipelines using Docker and AWS S3, reducing manual workload by 85%.\n• Enhanced order processing workflows through asynchronous RESTful APIs, reducing transaction failures by 25%.\n• Mentored 2 junior developers and improved system stability through continuous code reviews, refactoring, and adherence to agile practices.\n• Participated in architecture discussions, led sprint planning, and collaborated with global teams to roll out features impacting 1M+ B2C users.",
    },
    {
      year: "Jul 2021 - Nov 2023",
      institution: "Tata Consultancy Services",
      title: "SAP Commerce Cloud Engineer",
      description:
        "• Led SAP Hybris upgrade from v2005 to v2211, managing deployment across QA and production environments to ensure system compatibility.\n• Designed and implemented authentication and session management using Spring Security, improving login throughput by 30%.\n• Integrated third-party payment gateways using secure REST APIs, ensuring seamless checkout experience for users.\n• Refactored legacy modules to modular components in SAP Hybris, improving maintainability and onboarding speed.",
    },
  ];

  const projectsData = [
    {
      year: "2023",
      institution: "Personal Project",
      title: "Scalable E-commerce Platform",
      description: "Built a production-grade full-stack platform with product, cart, order, and admin modules using Spring Boot and React. Implemented asynchronous messaging across services with Kafka, improving modularity and fault tolerance. Packaged services into Docker containers and managed them with Docker Compose.",
    },
    {
      year: "2022",
      institution: "Personal Project",
      title: "AI Voice Assistant",
      description: "Developed an AI bot using Python and Google Speech Recognition to convert voice input into actionable commands. Built a frontend in React and integrated it with Flask backend using RESTful APIs.",
    },
  ];

  const designSkills = [
    { skill: "Spring Boot", percentage: 85 },
    { skill: "React", percentage: 80 },
    { skill: "Node.js", percentage: 70 },
    { skill: "FastAPI/Flask", percentage: 75 },
    { skill: "SAP Hybris", percentage: 90 },
    { skill: "Docker & Containerization", percentage: 80 },
    { skill: "Microservices Architecture", percentage: 85 },
    { skill: "Agile/Scrum Methodology", percentage: 90 },
  ];

  const codingSkills = [
    { skill: "Java", percentage: 90 },
    { skill: "Python", percentage: 85 },
    { skill: "JavaScript", percentage: 85 },
    { skill: "SQL", percentage: 80 },
    { skill: "HTML/CSS", percentage: 75 },
    { skill: "Bash", percentage: 70 },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/my-portfolio/Yash_Jain_Resume.pdf';
    link.download = 'Yash_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Resume</h1>
        <span>4+ Years of Experience</span>
        <button 
          className="download-resume-btn" 
          onClick={handleDownloadResume}
        >
          <FontAwesomeIcon icon={faDownload} /> Download PDF Resume
        </button>
      </header>
      <div className="resume-timeline">
        <div className="timeline-section">
          <h2 className="section-title">Experience</h2>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
        <div className="timeline-section">
          <h2 className="section-title">Projects</h2>
          {projectsData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
          <h2 className="section-title">Education</h2>
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
          <h2 className="section-title">Certification</h2>
          {certificationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
      <section className="skills-section">
        <div className="skills-chart">
          <div className="skills-column">
            <h2 className="section-title">Frameworks & Tools</h2>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          <div className="skills-column">
            <h2 className="section-title">Programming Languages</h2>
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
    <p className="description" style={{ whiteSpace: 'pre-line' }}>{description}</p>
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
