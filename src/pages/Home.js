// src/components/Home.js
import React, { useEffect, useState } from "react";
import { fetchMediumPosts, fetchGitHubRepos } from "../services/api";
import "../component/Home.css";
const Home = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [githubRepos, setGitHubRepos] = useState([]);
  const [mediumPage, setMediumPage] = useState(1);
  const [repoPage, setRepoPage] = useState(1);

  useEffect(() => {
    const loadMediumPosts = async () => {
      const posts = await fetchMediumPosts();
      setMediumPosts(posts.slice(0, 5));
    };

    const loadGitHubRepos = async () => {
      const repos = await fetchGitHubRepos();
      setGitHubRepos(repos.slice(0, 5));
    };

    loadMediumPosts();
    // loadGitHubRepos();
  }, []);

  const loadMoreMediumPosts = async () => {
    const posts = await fetchMediumPosts();
    setMediumPosts(
      mediumPosts.concat(posts.slice(mediumPage * 5, (mediumPage + 1) * 5))
    );
    setMediumPage(mediumPage + 1);
  };

  const loadMoreGitHubRepos = async () => {
    const repos = await fetchGitHubRepos();
    setGitHubRepos(
      githubRepos.concat(repos.slice(repoPage * 5, (repoPage + 1) * 5))
    );
    setRepoPage(repoPage + 1);
  };

  return (
    <div>
      <h2>Stories by Yash on Medium</h2>
      <div className="scroll-container">
        {mediumPosts.map((post, index) => (
          <div key={index} className="post-card">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img src={post.thumbnail} alt={post.title} />
              <h3>{post.title}</h3>
            </a>
          </div>
        ))}
      </div>
      <button class="load-more-button" onClick={loadMoreMediumPosts}>
        &#x21bb;
      </button>

      <h2>GitHub Repositories</h2>
      <div className="scroll-container">
        {githubRepos.map((repo, index) => (
          <div key={index} className="repo-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        ))}
      </div>
      <button onClick={loadMoreGitHubRepos}>Load More</button>
    </div>
  );
};

export default Home;
