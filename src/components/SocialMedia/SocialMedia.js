import React from 'react'
import { StyledGridColumnsContainer } from '../StyledGridColumnsContainer';
import { SocialMediaItem } from './SocialMediaItem';

import { FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import SocialMediaImg1 from '../../images/social-1.jpg'
import SocialMediaImg2 from '../../images/social-2.jpg'
import SocialMediaImg3 from '../../images/social-3.jpg'



const SocialMedia = () => {
    return (
        <StyledGridColumnsContainer>
            <SocialMediaItem url="https://www.facebook.com/" icon={<FaFacebookSquare />} backgroundImage={SocialMediaImg1} />
            <SocialMediaItem url="https://www.youtube.com/" icon={<FaYoutubeSquare />} backgroundImage={SocialMediaImg2} />
            <SocialMediaItem url="https://twitter.com/" icon={<FaTwitterSquare />} backgroundImage={SocialMediaImg3} />
        </StyledGridColumnsContainer>
    )
}

export default SocialMedia
