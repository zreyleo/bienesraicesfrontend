import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    flex: 1;
    justify-content: space-between;
    max-width: 500px;
    margin: 30px auto 0 auto;

    li {
        display: flex;

        img {
            margin-right: 10px;
        }
    }
`;

const Iconos = ({ habitaciones, estacionamientos, wc }) => {
    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);
    console.log(iconos);

    const imagenesIconos = iconos.edges;

    return (
        <ListadoIconos>
            <li>
                <img src={imagenesIconos[0].node.publicURL} />
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagenesIconos[1].node.publicURL} />
                <p>{estacionamientos}</p>
            </li>
            <li>
                <img src={imagenesIconos[2].node.publicURL} />
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
    );
}
 
export default Iconos;