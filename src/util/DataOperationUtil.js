const sortRepoDataByCreatedDate = (data) => {
    return data.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  };

const sortMediumDataByPubDate = (data) => {
  return data.items.slice().sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
};

export {sortRepoDataByCreatedDate,sortMediumDataByPubDate};