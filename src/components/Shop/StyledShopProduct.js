import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
const StyledShopProduct = styled.article`
    text-align: center;
    img {
        height: 200px;
        object-fit: contain;    
    }

    h2 {text-transform: capitalize; margin-top: .5rem;}
    h3 {font-size: .75rem}
    p {
        margin-top: .5rem;
        color: #a39161;
        font-weight: 500;
        ::after {
            content: "kr.";
            margin-left: .2rem;
        }
    }
    a {
        font-size: .8rem;
        font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        font-weight: 600;
        line-height: 1;
        display: inline-block;
        margin-top: 1rem;
        border: 1px solid #a39161;
        padding: .75rem 1.5rem;
        text-transform: uppercase;
        color: #fff;
        background-color: #a39161;
        :hover {
        background-color: #706c71;
        }
    }
`;

export const ShopProduct = ({ img, make, model, price }) => {
    return (<StyledShopProduct>
        <img src={img} alt="" />
        <h2>{make}</h2>
        <h3>{model}</h3>
        <p>{price}</p>
        <Link to="/">See more..</Link>
    </StyledShopProduct>);
};
