import React from 'react';
import styled from 'styled-components';

import slugify from 'react-slugify';

// import placeholderImg from '../../images/product-placeholder.png'
import { ShopProduct } from './StyledShopProduct';

const StyledShopProducts = styled.section`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    grid-gap: 2rem 1rem;
`;

export const ShopProducts = ({ data, slug }) => {
    return (
        <StyledShopProducts>
            {data.map((element, index) => {
                if (slug === undefined) {
                    return (
                        < ShopProduct key={index} make={element.make} model={element.model} price={element.price} img={element.images[0]} sku={element.sku} />
                    )
                } else if (slugify(element.category) === slug) {
                    return (
                        < ShopProduct key={index} make={element.make} model={element.model} price={element.price} img={element.images[0]} sku={element.sku} />
                    )
                } else if (slugify(element.make) === slug) {
                    return (
                        < ShopProduct key={index} make={element.make} model={element.model} price={element.price} img={element.images[0]} sku={element.sku} />
                    )
                }
                return null
            })}
        </StyledShopProducts>
    );
};


