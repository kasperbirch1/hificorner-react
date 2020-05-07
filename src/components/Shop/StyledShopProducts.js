import React from 'react';
import styled from 'styled-components';

// import placeholderImg from '../../images/product-placeholder.png'
import { ShopProduct } from './StyledShopProduct';

const StyledShopProducts = styled.section`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    grid-gap: 2rem 1rem;
`;
export const ShopProducts = ({ data }) => {
    return (
        <StyledShopProducts>
            {data.map((element, index) => {
                return (
                    < ShopProduct key={index} make={element.make} model={element.model} price={element.price} img={element.images[0]} sku={element.sku} />
                )
            })}
        </StyledShopProducts>
    );
};


