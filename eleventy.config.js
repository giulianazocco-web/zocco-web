// Configuración de la web zocco.ar (Eleventy).
// Las páginas son HTML; las entradas de CTRL.G son archivos Markdown en ctrlg/posts/
// que se cargan desde el panel (Pages CMS).
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.ignores.add("LEEME.md");
  eleventyConfig.ignores.add("README.md");

  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  eleventyConfig.addFilter("fecha", (d) => {
    const f = new Date(d);
    return `${f.getUTCDate()} de ${meses[f.getUTCMonth()]} de ${f.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("iso", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("minutos", (html) => {
    const palabras = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(palabras / 220));
  });
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("primeros", (arr, n) => (arr || []).slice(0, n));

  eleventyConfig.addCollection("ctrlg", (api) =>
    api.getFilteredByGlob("ctrlg/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
