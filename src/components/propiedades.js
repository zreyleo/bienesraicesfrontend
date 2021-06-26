import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Iconos from './iconos';

import Layout from './layout';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 50px;
    }
`;

const Sidediv = styled.div`
    p {
        margin: 0;
    }

    .precio {
        font-size: 2rem;
        color: #75ab00;
    }
    
    .agente {
        margin-top: 40px;
        border-radius: 20px;
        background-color: #75ab00;
        color: #fff;
        padding: 30px;
    }
`;

export const query = graphql`
    query($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                precio
                estacionamientos
                wc
                habitaciones
                descripcion
                imagen {
                    localFile {
                        publicURL
                    }
                }
                agente {
                    nombre
                    telefono
                    email
                }
            }
        }
    }
`;

// export const query = graphql`
//     query($id: String!) {
//         allStrapiPropiedades(filter: {id: {eq: $id}}) {
//             nodes {
//                 nombre
//                 estacionamientos
//                 wc
//                 habitaciones
//                 descripcion
//                 imagen {
//                     sharp: childImageSharp {
//                         fluid ( maxWidth: 1200 ) {
//                             ...GatsbyImageSharpFluid_withWebp
//                         }
//                     }
//                 }
//                 agente {
//                     nombre
//                     telefono
//                     email
//                 }
//             }
//         }
//     }
// `;

const Propiedades = ({ data: { allStrapiPropiedades: { nodes } } }) => {
    const { nombre, imagen, descripcion, precio, estacionamientos, habitaciones, wc, agente } = nodes[0];
    console.log(imagen)
    return (
        <Layout>
            <h2>{nombre}</h2>

            <Contenido>
                <div>
                    <img src={imagen.localFile.publicURL} />
                    <p>{descripcion}</p>
                </div>
                <Sidediv>
                    <p className="precio">${precio}</p>
                    <Iconos
                        estacionamientos={estacionamientos}
                        wc={wc}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h3>Vendedor</h3>
                        <p>Nombre: {agente.nombre}</p>
                        <p>Email: {agente.email}</p>
                        <p>Telefono: {agente.telefono}</p>
                    </div>
                </Sidediv>
            </Contenido>
        </Layout>
    );
}
 
export default Propiedades;