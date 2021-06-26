import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';


import Layout from './layout';
import ListadoPropiedades from './listado-propiedades';

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 50px;
    }
`;

export const query = graphql`
    query($id: String!) {
        allStrapiPaginas(filter: { id: { eq: $id } }) {
            nodes {
                nombre
                contenido
                id
                imagen {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

const Propiedades = ({ data: { allStrapiPaginas: { nodes } } }) => {
    console.log(nodes)
    const { nombre, imagen, contenido } = nodes[0];
    console.log(imagen)
    return (
        <Layout>
            <h2>{nombre}</h2>

            <div className="container">
                <ContenidoPagina>
                    <img src={imagen.localFile.publicURL} />

                    <p>{contenido}</p>
                </ContenidoPagina>
            </div>

            {
                nombre == 'Propiedades' && <ListadoPropiedades />
            }
        </Layout>
    );
}

export default Propiedades;