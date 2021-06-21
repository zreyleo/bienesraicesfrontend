import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;

    @media(min-width: 768px) {
        flex-direction: row;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    color: #fff;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 5px;
    margin-left: 10px;

    &:first-of-type {
        margin-left: 0;
    }

    &.pagina-actual {
        border-bottom: 2px solid #fff;
    }
`;

const Navegacion = () => {
    return (
        <Nav>
            <NavLink 
                to="/"
                activeClassName="pagina-actual"    
            >Inicio</NavLink>
            
            <NavLink 
                to="/propiedades"
                activeClassName="pagina-actual"    
            >Propiedades</NavLink>

            <NavLink 
                to="/nosotros"
                activeClassName="pagina-actual"    
            >Nosotros</NavLink>
        </Nav>
    );
}
 
export default Navegacion;