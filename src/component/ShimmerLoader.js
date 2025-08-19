import React from "react";
import "./ShimmerLoader.css";

const ShimmerLoader = ({ count = 4, type = "card" }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => index);

  if (type === "card") {
    return (
      <div className="shimmer-container">
        {shimmerItems.map((item) => (
          <div key={item} className="shimmer-card">
            <div className="shimmer-icon"></div>
            <div className="shimmer-content">
              <div className="shimmer-title"></div>
              <div className="shimmer-description"></div>
              <div className="shimmer-tag"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "post") {
    return (
      <div className="shimmer-container">
        {shimmerItems.map((item) => (
          <div key={item} className="shimmer-post">
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-content">
              <div className="shimmer-title"></div>
              <div className="shimmer-date"></div>
              <div className="shimmer-excerpt"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ShimmerLoader; 