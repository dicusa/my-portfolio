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
  return posts;
  // const post = [
  //   {
  //     title: "Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:712/1*yiw8smZDlNLmGgDyzWXdQg.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  //   {
  //     title: "Understanding Single Sign-On Understanding Single Sign-On",
  //     link: "https://medium.com/@jain.yash1909/understanding-single-sign-on-sso-ca7aae32bdcd?source=rss-572bb85fdb------2",
  //     thumbnail:
  //       "https://miro.medium.com/v2/resize:fit:1200/1*Y1Kc3-p3zOj2EgLRrdAE_w.png",
  //   },
  // ];
  // return post;
};

const fetchGitHubRepos = async (page = 1, perPage = 4) => {
  const response = await fetch(
    `https://api.github.com/users/dicusa/repos?per_page=4&page=${page}`
  );
  const data = await response.json();
  return data;
};

export { fetchMediumPosts, fetchGitHubRepos };
