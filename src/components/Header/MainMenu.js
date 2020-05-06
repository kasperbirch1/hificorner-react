import React from 'react'
import StyledNav from "../Header/StyledNav";
import StyledUl from './StyledUl';
import { StyledLink } from './StyledLink';



const MainMenu = () => {
    return (
        <StyledNav>
            <StyledUl>
                <li><StyledLink to={`/`}>home</StyledLink></li>
                <li><StyledLink to={`/categories`}>categories</StyledLink></li>
                <li><StyledLink to={`/about`}>about us</StyledLink></li>
                <li><StyledLink to={`/brands`}>brands</StyledLink></li>
                <li><StyledLink to={`/blog`}>blog</StyledLink></li>
                <li><StyledLink to={`/events`}>events</StyledLink></li>
                <li><StyledLink to={`/shop`}>shop</StyledLink></li>
                <li><StyledLink to={`/contact`}>contact us</StyledLink></li>
            </StyledUl>
        </StyledNav >
    )
}

export default MainMenu
