import React from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';
import backgroundImage from '../../images/product-placeholder.png';
const StyledCategoriesIntoCard = styled.div`
    padding:1rem;
    background-size: cover;
    background-position: center;
    display: grid;
    place-content: center; 
    position: relative;
    ::after {
        content: "";
        background-color: rgba(163, 145, 97, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    a {
        z-index: 100;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        text-decoration: underline;
    }

`;
export const CategoriesIntoCard = ({ category, slug }) => {
    return (
        <StyledCategoriesIntoCard style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Link to={`../shop/${slug}`}>
                {category}
            </Link>
        </StyledCategoriesIntoCard>
    );
};
