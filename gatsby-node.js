const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query MyQuery {
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