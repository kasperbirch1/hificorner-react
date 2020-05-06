import React from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';
/* */
const StyledShopNav = styled.nav`
    background-color: #f3f3f3;
    outline: 1px dotted red;
    padding:  1rem;
    h3 {
        padding-bottom: .5rem;
        font-weight: 600;
        line-height: 1rem;

    }
    li {
        text-transform: capitalize;
        padding: .25rem 0;
        list-style: none;
    }
    a {
        color: black;
        :hover {
            color: #a39161;
        }
    }
`;
export const ShopMenu = ({ categories }) => {
    return (

        <StyledShopNav>
            <ul>
                <li><h3>Categories</h3></li>
                <li><Link to="/shop">All Categories</Link></li>
                {categories.map((item, index) => {
                    return (
                        <li key={index}><Link to="/shop">{item}</Link></li>
                    )

                })}
            </ul>
        </StyledShopNav>
    );
};
