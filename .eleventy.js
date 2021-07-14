module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('uploads');

  return {
    templateFormats: [
      'njk',
      'yml',
      'md'
    ],

    dir: {
      input: 'src',
      output: '_site'
    }
  }
}