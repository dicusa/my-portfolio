import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>My Work</h1>
      <div className="medium-posts">
        <div className="post">
          <img src="post1_thumbnail_url" alt="Post 1" />
          <h3>Post 1 Title</h3>
        </div>
        <div className="post">
          <img src="post2_thumbnail_url" alt="Post 2" />
          <h3>Post 2 Title</h3>
        </div>
        <div className="post">
          <img src="post3_thumbnail_url" alt="Post 3" />
          <h3>Post 3 Title</h3>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
};

export default Home;
