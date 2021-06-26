import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Form = styled.form`
    width: 100%;
    display: flex;
    margin: 20px auto 0 auto;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
`;

const Select = styled.select`
    flex: 1;
    padding: 10px;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {
    const [categoria, setCategoria] = useState('');

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                nodes {
                    id
                    nombre
                }
            }
        }
    `);
    
    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => 
         (
            <Form>
                <Select
                    onChange={e => setCategoria(e.target.value)}
                    value={categoria}
                >
                    <option value="">-- filtrar --</option>
                    {
                        categorias.map(opcion => (
                            <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                        ))
                    }
                </Select>
            </Form>
        );
    

    return {
        categoria,
        FiltroUI
    };
}
 
export default useFiltro;