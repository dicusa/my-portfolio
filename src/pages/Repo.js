import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../component/Home.css";
import { fetchGitHubRepos } from "../services/api";

const Repo = () => {
  const [githubRepos, setGitHubRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    const loadGitHubRepos = async () => {
      const repos = await fetchGitHubRepos(currentPage);
      setGitHubRepos(repos);
    };

    loadGitHubRepos();
  }, []);

  const loadMoreGitHubRepos = async () => {
    const repos = await fetchGitHubRepos(currentPage + 1);
    console.info(repos);
    if (repos != null) {
      const temp = currentPage + 1;
      setCurrentPage(temp);
      const tempRepo = githubRepos;
      setGitHubRepos(tempRepo.concat(repos));
      if (repos.length < 4) setLoadMoreVisible(false);
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Github Repos</h1>
      </header>

      <section id="github" className="section github-repos">
        <div className="repo-list">
          {githubRepos.map((repo, index) => (
            <div key={index} className="repo-card">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="repo-content">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="repo-icon"
                  />
                  <h3 className="repo-title">{repo.name}</h3>
                  <p className="repo-description">{repo.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      {loadMoreVisible ? (
        <button className="load-more" onClick={loadMoreGitHubRepos}>
          See More Repos
        </button>
      ) : null}
      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Repo;
