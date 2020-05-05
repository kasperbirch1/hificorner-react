import React from 'react'

import { StyledHeroSection } from './StyledHeroSection'
const Hero = ({ quote, author, img }) => {
    return (
        <StyledHeroSection style={{ backgroundImage: `url(${img})` }}>
            <h2>{quote}</h2>
            <h3>{author}</h3>
        </StyledHeroSection>
    )
}

export default Hero
