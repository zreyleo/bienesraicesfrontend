import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import PropiedadPreview from './propiedad-preview';

import usePropiedades from '../hooks/usePropiedades';

import * as listadoPropiedades from '../css/listado-propiedades.module.css';

const ListadoPropiedades = () => {
    const data = usePropiedades();
    console.log(data);

    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
        setPropiedades(data);
    }, []);

    return (
        <>
            <h2
                css={css`
                    margin-top: 50px;
                `}
            >Nuestras Propiedades</h2>

            <ul className={listadoPropiedades.propiedades}>
                {propiedades.map(propiedad => (
                    <li key={propiedad.id}>
                        <PropiedadPreview propiedad={propiedad} />
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default ListadoPropiedades;