import React, { useEffect, useState } from "react";
import { fetchMediumPosts, fetchGitHubRepos } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../component/Home.css";

const Home = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [githubRepos, setGitHubRepos] = useState([]);

  useEffect(() => {
    const loadMediumPosts = async () => {
      const posts = await fetchMediumPosts();
      setMediumPosts(posts.slice(0, 5)); // Fetch only the latest 5 posts
    };

    const loadGitHubRepos = async () => {
      const repos = await fetchGitHubRepos();
      setGitHubRepos(repos.slice(0, 5)); // Fetch only the latest 5 repos
    };

    loadMediumPosts();
    loadGitHubRepos();
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Latest Medium Stories</h1>
      </header>

      <section id="medium" className="section medium-posts">
        <div className="post-list">
          {mediumPosts.map((post, index) => (
            <div key={index} className="post-card">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="post-thumbnail"
                />
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-date">
                    {new Date(post.pubDate).toLocaleDateString()}
                  </p>
                  <p className="post-excerpt">{post.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="github" className="section github-repos">
        <h2 className="section-title">GitHub Repositories</h2>
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

      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
