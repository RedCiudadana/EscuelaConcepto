module.exports = function(eleventyConfig) {
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