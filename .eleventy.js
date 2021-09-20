const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('uploads');
  eleventyConfig.addPassthroughCopy({ './public/css': 'css' });
  eleventyConfig.addPassthroughCopy({ './public/js': 'js' });
  eleventyConfig.addPassthroughCopy({ './public/img': 'img' });

  // dt.toLocaleString(DateTime.DATE_SHORT); //=>  '4/20/2017'
  eleventyConfig.addFilter("date_format", (date) => {
    if (!date) {
      return;
    }

    // 2021-07-14T06:51:14.087Z

    var dt = DateTime.fromJSDate(new Date(date));
    return dt.toLocaleString(DateTime.DATE_SHORT);
  });

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