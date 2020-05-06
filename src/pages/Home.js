import React from 'react'
import Header from "../components/Header/Header"
import MainMenu from "../components/Header//MainMenu"
import IconMenu from '../components/Header//IconMenu';
import Wrapper from '../components/Recycling/Wrapper';
import Logo from "../images/logo-white.png";
import { StyledLogoXL } from '../components/Header/StyledLogoXL';
import Hero from '../components/Hero/Hero';
import HeroImg from '../images/bg-home-herro.jpg';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import FrontpageInfoColumns from '../components/FrontpageInfoColumns/FrontpageInfoColumns';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header>
                <Wrapper>
                    <IconMenu />
                    <MainMenu />
                    <StyledLogoXL src={Logo} alt="Logo" />
                </Wrapper>
            </Header>
            <main>
                <ProductSlider />
                <Hero quote="KNOWLEDGE SPEAKS, BUT WISDOM LISTENS." author="JIMI HENDRIX" img={HeroImg} />
                <SocialMedia />
                <FrontpageInfoColumns />
            </main>
            <Footer />
        </>
    )
}

export default Home
