import React from "react";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to My Portfolio!</h1>
        <p>Explore my projects, read my blogs, and view my certifications.</p>
      </section>
      <section className="content">
        <div className="card">
          <h2>My Work</h2>
          <p>Details about your work or projects.</p>
        </div>
        <div className="card">
          <h2>Medium.com Posts</h2>
          <div className="medium-posts">
            <a
              href="https://medium.com/@your-profile/your-post-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Post 1
            </a>
            <a
              href="https://medium.com/@your-profile/your-post-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Post 2
            </a>
            <a
              href="https://medium.com/@your-profile/your-post-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Post 3
            </a>
          </div>
        </div>
        <div className="card">
          <h2>GitHub Projects</h2>
          <div className="github-projects">
            <a
              href="https://github.com/your-username/project-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1
            </a>
            <a
              href="https://github.com/your-username/project-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2
            </a>
            <a
              href="https://github.com/your-username/project-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 3
            </a>
          </div>
        </div>
        <div className="card">
          <h2>Certificates</h2>
          <div className="certificates">
            <a
              href="https://example.com/certificate-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate 1
            </a>
            <a
              href="https://example.com/certificate-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate 2
            </a>
            <a
              href="https://example.com/certificate-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate 3
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
