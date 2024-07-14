// src/services/api.js
const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jain.yash1909";

const fetchMediumPosts = async () => {
  const response = await fetch(MEDIUM_FEED_URL);
  const data = await response.json();
  const posts = data.items.map((item) => {
    const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : "";
    return {
      title: item["title"],
      link: item["link"],
      thumbnail,
    };
  });
  return posts; // assuming the items key contains the posts
};

const fetchGitHubRepos = async (page = 1, perPage = 5) => {
  const response = await fetch(
    `https://api.github.com/users/your_github_username/repos?per_page=${perPage}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export { fetchMediumPosts, fetchGitHubRepos };
