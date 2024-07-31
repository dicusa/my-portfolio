import React, { useEffect, useState } from "react";
import { fetchMediumPosts } from "../services/api";
import "../component/Home.css";

const Blog = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadMediumPosts = async () => {
      const posts = await fetchMediumPosts();
      setMediumPosts(posts.slice(0, 4)); // Fetch only the latest 5 posts
    };

    loadMediumPosts();
  }, []);

  const loadMoreMediumPost = async () => {
    const posts = await fetchMediumPosts();
    if (posts.length > currentPage * 4) {
      const temp = currentPage + 1;
      setCurrentPage(temp);
      setMediumPosts(posts.slice(0, temp * 4));
    }
  };
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
      <button className="load-more" onClick={loadMoreMediumPost}>
        See More Post
      </button>
      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Blog;
