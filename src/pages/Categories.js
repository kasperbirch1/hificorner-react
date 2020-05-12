import React from 'react'
import Header from "../components/Header/Header"
import Wrapper from '../components/Recycling/Wrapper';
import MainMenu from "../components/Header/MainMenu";
import IconMenu from '../components/Header/IconMenu';
import CategoriesInto from '../components/CategoriesInto/CategoriesInto'
import Footer from '../components/Footer/Footer';

const Categories = () => {
    return (
        <>
            <Header>
                <Wrapper>
                    <IconMenu />
                    <MainMenu />
                </Wrapper>
            </Header>
            <main style={{ backgroundColor: 'black' }}>
                <Wrapper>
                    <CategoriesInto />
                </Wrapper>
            </main>
            <Footer />

        </>
    )
}

export default Categories
