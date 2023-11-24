module.exports = function (eleventyConfig) {
  // Eleventy server config
  // watch compiled CSS and JS
  eleventyConfig.setServerOptions({
    watch: ["./dist/assets/css/**/*.css", "./dist/assets/js/**/*.js"],
    port: 3000,
  });

  // Override default config
  return {
    dir: {
      input: "./src",
      output: "./dist",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
