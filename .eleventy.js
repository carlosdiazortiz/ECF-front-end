module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("./src/_data/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPassthroughCopy("./src/uploads");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};

