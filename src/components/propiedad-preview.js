import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Iconos from './iconos';

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
            </Contenido>
        </Card>
    );
}
 
export default PropiedadPreview;