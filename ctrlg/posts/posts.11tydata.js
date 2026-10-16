// Datos comunes a todas las entradas de CTRL.G
module.exports = {
  layout: "entrada.njk",
  permalink: (data) => `/ctrlg/${data.page.fileSlug}/`
};
