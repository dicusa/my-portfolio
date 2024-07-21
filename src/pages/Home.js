import React, { useEffect, useState, useRef } from "react";
import { fetchMediumPosts, fetchGitHubRepos } from "../services/api";
import "../component/Home.css";
import { marked } from "marked";

const Home = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [mediumPage, setMediumPage] = useState(1);
  const [githubRepos, setGitHubRepos] = useState([]);
  const [repoPage, setRepoPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const mediumContainerRef = useRef(null);
  const githubContainerRef = useRef(null);

  useEffect(() => {
    const loadMediumPosts = async () => {
      setIsLoading(true);
      const posts = await fetchMediumPosts();
      setMediumPosts(posts.slice(0, 5));
      setIsLoading(false);
    };

    const loadGitHubRepos = async () => {
      setIsLoading(true);
      const repos = await fetchGitHubRepos();
      const reposWithReadme = await Promise.all(
        repos.slice(repoPage * 5, (repoPage + 1) * 5).map(async (repo) => {
          const readme = await fetchReadme(repo.owner.login, repo.name);
          return { ...repo, readme };
        })
      );
      setGitHubRepos(githubRepos.concat(reposWithReadme));
      setRepoPage(repoPage + 1);
      setIsLoading(false);
    };

    loadMediumPosts();
    loadGitHubRepos();
  }, []);

  const loadMoreMediumPosts = async () => {
    setIsLoading(true);
    const posts = await fetchMediumPosts();
    setMediumPosts(
      mediumPosts.concat(posts.slice(mediumPage * 5, (mediumPage + 1) * 5))
    );
    setMediumPage(mediumPage + 1);
    setIsLoading(false);
  };

  const loadMoreGitHubRepos = async () => {
    setIsLoading(true);
    const repos = await fetchGitHubRepos();
    setGitHubRepos(
      githubRepos.concat(repos.slice(repoPage * 5, (repoPage + 1) * 5))
    );
    setRepoPage(repoPage + 1);
    setIsLoading(false);
  };

  const handleScroll = (ref, loadMoreFunc) => {
    if (
      ref.current.scrollWidth - ref.current.scrollLeft <=
        ref.current.clientWidth + 100 &&
      !isLoading
    ) {
      loadMoreFunc();
    }
  };
  const fetchReadme = async (owner, repo) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
    );
    if (response.ok) {
      const text = await response.text();
      return marked(text);
    }
    return null;
  };
  // const getReadmeImage = (repo) => {
  //   const imageUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/README.md`;
  //   return (
  //     <img
  //       src={imageUrl}
  //       alt={repo.name}
  //       onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
  //     />
  //   );
  // };

  return (
    <div>
      <h2>Stories by Yash on Medium</h2>
      <div
        className="scroll-container"
        ref={mediumContainerRef}
        onScroll={() => handleScroll(mediumContainerRef, loadMoreMediumPosts)}
      >
        {mediumPosts.map((post, index) => (
          <div key={index} className="post-card">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img src={post.thumbnail} alt={post.title} />
              <h3>{post.title}</h3>
            </a>
          </div>
        ))}
      </div>
      {isLoading && <p>Loading more posts...</p>}

      <h2>GitHub Repositories</h2>
      <div
        className="scroll-container"
        ref={githubContainerRef}
        onScroll={() => handleScroll(githubContainerRef, loadMoreGitHubRepos)}
      >
        {githubRepos.map((repo, index) => (
          <div key={index} className="post-card">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.readme ? (
                <div
                  className="readme-content"
                  dangerouslySetInnerHTML={{ __html: repo.readme }}
                />
              ) : (
                <img src="https://via.placeholder.com/150" alt={repo.name} />
              )}
              <h3>{repo.name}</h3>
            </a>
          </div>
        ))}
      </div>
      {isLoading && <p>Loading more repositories...</p>}
    </div>
  );
};

export default Home;
