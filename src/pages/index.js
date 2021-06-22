import React from 'react';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listado-propiedades';

import useInicio from '../hooks/useInicio';

import * as heroCSS from '../css/hero.module.css';

const Index = () => {
    const data = useInicio();

    const { nombre, contenido, imagen } = data;

    return (
        <Layout>
            <BackgroundImage
                tag="section"
                fluid={imagen.sharp.fluid}
                css={css`
                    height: 600px;
                `}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}>Ventas de casas y departamentos de lujo</h1>
                </div>
            </BackgroundImage>
            <div
                css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}
            >
                <h1>{nombre}</h1>

                <p
                    css={css`
                        text-align: center;
                    `}
                >{contenido}</p>
            </div>

            <Encuentra />

            <ListadoPropiedades />
        </Layout>
    )
}

export default Index;