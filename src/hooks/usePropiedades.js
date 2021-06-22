import { graphql, useStaticQuery } from "gatsby";

const usePropiedades = () => {
    const data = useStaticQuery(graphql`
        {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    habitaciones
                    estacionamientos
                    precio
                    categoria {
                        nombre
                    }
                    agente {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        localFile {
                            sharp: childImageSharp {
                                fluid( maxWidth: 600, maxHeight: 400 ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    // console.log(data);
    return data.allStrapiPropiedades.nodes.map(propiedad => ({
        id: propiedad.id,
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        wc: propiedad.wc,
        habitaciones: propiedad.habitaciones,
        estacionamientos: propiedad.estacionamientos,
        agente: propiedad.agente,
        precio: propiedad.precio,
        categoria: propiedad.categoria,
        imagen: propiedad.imagen.localFile
    }));
}

export default usePropiedades;