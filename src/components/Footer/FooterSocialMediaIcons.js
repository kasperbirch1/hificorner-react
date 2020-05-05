import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

import styled from 'styled-components'
const StyledFooterSocialMediaIcons = styled.ul`
        list-style: none;
        display: flex;
        justify-content: space-around;
        li a svg {
            font-size: 3rem;
            color: white;
            :hover {
                color: #706c71;
            }
        }
`

const FooterSocialMediaIcon = ({ url, icon }) => {
    return (
        <li>
            <a href={url}>
                {icon}
            </a>
        </li>
    )
}


const FooterSocialMediaIcons = () => {
    return (

        <StyledFooterSocialMediaIcons>
            <FooterSocialMediaIcon url="/" icon={<FaFacebook />} />
            <FooterSocialMediaIcon url="/" icon={<FaYoutube />} />
            <FooterSocialMediaIcon url="/" icon={<FaTwitter />} />
        </StyledFooterSocialMediaIcons>
    )
}

export default FooterSocialMediaIcons
