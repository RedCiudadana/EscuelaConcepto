module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('uploads');

  return {
    templateFormats: [
      'njk',
      'yml'
    ],

    dir: {
      input: 'src',
      output: '_site'
    }
  }
}