const blogposts = (collection) => {
  let blogposts = collection
    .getFilteredByGlob("./src/content/blogposts/*.md")
    .reverse();
  return blogposts;
};

module.exports = { blogposts };
