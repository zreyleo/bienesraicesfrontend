const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query MyQuery {
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
            allStrapiPropiedades {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);

    // si hay resultados
    if (resultado.errors) {
        reporter.panic('No hub resultados', resultado.errors);
    }

    // generar los archivos estaticos si hay resultados
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    const paginas = resultado.data.allStrapiPaginas.nodes;
    console.log(paginas)

    paginas.forEach(pagina => {
        console.log(urlSlug(pagina.nombre))
        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        });
    });

    propiedades.forEach(propiedad => {
        console.log(urlSlug(propiedad.nombre))
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        });
    });
}