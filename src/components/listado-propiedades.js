import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import PropiedadPreview from './propiedad-preview';

import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFiltro';

import * as listadoPropiedades from '../css/listado-propiedades.module.css';

const ListadoPropiedades = () => {
    const data = usePropiedades();

    const [propiedades] = useState(data);
    const [filtradas, setFiltradas] = useState([]);

    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        if (categoria) {
            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre == categoria)
            setFiltradas(filtro);
        } else {
            setFiltradas(propiedades);
        }
    }, [categoria]);

    return (
        <>
            <h2
                css={css`
                    margin-top: 50px;
                `}
            >Nuestras Propiedades</h2>

            {FiltroUI()}

            <ul className={listadoPropiedades.propiedades}>
                {filtradas.map(propiedad => (
                    <li key={propiedad.id}>
                        <PropiedadPreview propiedad={propiedad} />
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default ListadoPropiedades;