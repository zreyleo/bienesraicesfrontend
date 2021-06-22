import React from 'react';
import { css } from '@emotion/react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer
            css={css`
                text-align: center;
                padding: 1rem 0;
                background-color: #0D283B;
                color: white;
                margin-top: 50px;
            `}
        >
            <p
                css={css`
                    margin: 0;
                `}
            >Regynald Zambrano {year}</p>
        </footer>
    );
}
 
export default Footer;