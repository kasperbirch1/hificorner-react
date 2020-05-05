import React from 'react';
import { StyledSocialMediaItem } from './StyledSocialMediaItem';
export const SocialMediaItem = ({ url, icon, backgroundImage }) => {
    return (
        <StyledSocialMediaItem style={{ backgroundImage: `url(${backgroundImage})` }}>
            <a href={url} target="blank"> {icon}</a>
        </StyledSocialMediaItem>);
};


