const blogposts = (collection) => {
  let posts = collection
    .getFilteredByGlob("./src/content/blogposts/*.md")
    .reverse();
  return posts;
};

module.exports = blogposts;
