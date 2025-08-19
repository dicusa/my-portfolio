import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../component/Home.css";
import { fetchGitHubRepos } from "../services/api";
import ShimmerLoader from "../component/ShimmerLoader";

const Repo = () => {
  const [githubRepos, setGitHubRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [languages, setLanguages] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  const updateLanguages = (repos) => {
    const newLanguages = new Set(
      repos.map((repo) => repo.language).filter(Boolean)
    );
    setLanguages((prevLanguages) => {
      const updatedLanguages = new Set([...prevLanguages, ...newLanguages]);
      return [...Array.from(updatedLanguages)];
    });
  };

  useEffect(() => {
    const loadGitHubRepos = async () => {
      setLoading(true);
      try {
        const repos = await fetchGitHubRepos(currentPage);
        setGitHubRepos(repos);
        updateLanguages(repos);
      } catch (error) {
        console.error("Error loading repos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubRepos();
  }, []);

  const loadMoreGitHubRepos = async () => {
    try {
      const repos = await fetchGitHubRepos(currentPage + 1);
      if (repos != null) {
        setCurrentPage((prev) => prev + 1);
        setGitHubRepos((prev) => [...prev, ...repos]);
        updateLanguages(repos);
        if (repos.length < 4) setLoadMoreVisible(false);
      }
    } catch (error) {
      console.error("Error loading more repos:", error);
    }
  };

  const filteredRepos =
    selectedLanguage === "All"
      ? githubRepos
      : githubRepos.filter((repo) => repo.language === selectedLanguage);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Github Repos</h1>
      </header>

      <div className="content-wrapper">
        <div className="filter-container">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`filter-button ${
                selectedLanguage === lang ? "active" : ""
              }`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        <section id="github" className="section github-repos">
          {loading ? (
            <ShimmerLoader count={4} type="card" />
          ) : (
            <div className="repo-list">
              {filteredRepos.map((repo, index) => (
                <div key={index} className="repo-card">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="repo-content">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="3x"
                        className="repo-icon"
                      />
                      <h3 className="repo-title">{repo.name}</h3>
                      <p className="repo-description">{repo.description}</p>
                      <p className="repo-language">{repo.language}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {loadMoreVisible && !loading && (
        <button className="load-more" onClick={loadMoreGitHubRepos}>
          See More Repos
        </button>
      )}
      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Repo;
