const { DateTime } = require("luxon");

const cursos = [
  "Estado Abierto, Políticas Públicas y Datos Abiertos",
  "Gobierno Abierto, Transparencia y Acceso a la Información Pública",
  "Justicia Abierta, Transparencia y Datos Abiertos",
  "Datos Abiertos en la Justicia 2023",
  "Introducción a la Justicia Abierta 2023",
  "Diseño de Servicios en la Justicia 2023",
  "Acceso a la información pública 2023",
];

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('uploads');
  eleventyConfig.addPassthroughCopy({ './public/css': 'css' });
  eleventyConfig.addPassthroughCopy({ './public/js': 'js' });
  eleventyConfig.addPassthroughCopy({ './public/img': 'img' });

  /*
  eleventyConfig.addCollection("", function(collectionApi) {
    return collectionApi.getFilteredByTag('');
  });*/

  // dt.toLocaleString(DateTime.DATE_SHORT); //=>  '4/20/2017'
  eleventyConfig.addFilter("date_format", (date) => {
    if (!date) {
      return;
    }

    // 2021-07-14T06:51:14.087Z

    var dt = DateTime.fromJSDate(new Date(date));
    return dt.toLocaleString(DateTime.DATE_SHORT);
  });

  cursos.forEach((curso) => {
    eleventyConfig.addCollection(curso, function (collectionApi) {

        let collection = collectionApi.getFilteredByTags('class').filter(function (item) {
            return item.data.course === curso;
        });

        return collection;
    });
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