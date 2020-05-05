import React from "react";
import Logo from "../../images/logo-white.png"
import { StyledLogo } from './StyledLogo';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

import styled from "styled-components"
import SpaceBetweenDIV from "../Recycling/SpaceBetweenDIV";

const StyledIcon = styled(FaSearch)`
    margin-right: .3rem; 
    font-size: .8rem;
    color: grey;
    grid-column: 2/3;
    grid-row: 1/2;
    z-index: 100;
`
const StyledSpaceBetweenDIV = styled(SpaceBetweenDIV)`
    width: 100px;
    svg {
        color: white;
        :hover {
            color: #a39161;
        }
    }
`


const IconMenu = () => {
    return (
        <SpaceBetweenDIV>
            <StyledLogo src={Logo} alt="Logo" />
            <SpaceBetweenDIV>
                <form style={{ marginRight: '1rem' }} >
                    <label style={{ display: "grid", gridTemplateColumns: '1fr auto', alignItems: 'center' }} htmlFor="Search">
                        <input style={{ padding: '0.3rem', borderRadius: '.2rem', border: 'none', gridColumn: '1/-1', gridRow: '1/2' }} id="Search" placeholder="Search" />
                        <StyledIcon />
                    </label>
                </form>
                <StyledSpaceBetweenDIV>
                    <FaShoppingCart />
                    <FaShoppingCart />
                    <GoLocation />
                    <AiOutlinePhone />
                    <AiOutlineMail />
                </StyledSpaceBetweenDIV>
            </SpaceBetweenDIV>
        </SpaceBetweenDIV>
    )
}

export default IconMenu
