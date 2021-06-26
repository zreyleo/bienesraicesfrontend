import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

import Iconos from './iconos';

const Boton = styled(Link)`
    display: block;
    margin-top: 20px;
    padding: 10px;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #e1e1e1;

    img {
        max-width: 100%;
    }
`;

const Contenido = styled.div`
    padding: 20px;

    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 20px 0;
        font-size: 2.4rem;
    }

    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const PropiedadPreview = ({ propiedad }) => {
    const { nombre, descripcion, habitaciones, imagen, wc, estacionamientos, precio } = propiedad;
    return (
        <Card>
            <Image
                fluid={imagen.sharp.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>

                <p className="precio">${precio}</p>

                <Iconos
                    wc={wc}
                    estacionamientos={estacionamientos}
                    habitaciones={habitaciones}
                />

                <Boton to={urlSlug(nombre)}>Visitar Propiedad</Boton>
            </Contenido>
        </Card>
    );
}
 
export default PropiedadPreview;