import React from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';
import slugify from 'react-slugify';

/* */
const StyledShopNav = styled.nav`
    background-color: #f3f3f3;
    padding:  1rem;
    h3 {
        padding: 1.5rem 0 .25rem;
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
export const ShopMenu = ({ categories, manufacturers }) => {
    return (
        < StyledShopNav >
            <ul>
                <li><h3>Categories</h3></li>
                <li><Link to="/shop">All Categories</Link></li>
                {categories.map((item, index) => {
                    return (
                        <li key={index}><Link to={`../../shop/${slugify(item)}`}>{item}</Link></li>
                    )
                })}
                <li><h3>Manufacturers</h3></li>
                <li><Link to="/shop">All Manufacturers</Link></li>
                {manufacturers.map((item, index) => {
                    return (
                        <li key={index}><Link to={`/shop/${slugify(item)}`}>{item}</Link></li>
                    )
                })}
            </ul>
        </ StyledShopNav>
    );
};
