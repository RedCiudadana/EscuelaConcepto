module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('uploads');

  return {
    templateFormats: [
      'njk'
    ],

    dir: {
      input: 'src',
      output: '_site'
    }
  }
}