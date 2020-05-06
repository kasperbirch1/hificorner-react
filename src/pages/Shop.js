import React, { useState, useEffect } from 'react'
import Header from "../components/Header/Header"
import Wrapper from '../components/Recycling/Wrapper';
import MainMenu from "../components/Header/MainMenu";
import IconMenu from '../components/Header/IconMenu';
import Footer from '../components/Footer/Footer'
import { ShopMenu } from '../components/Shop/StyledShopNav';
import { ShopProducts } from '../components/Shop/StyledShopProducts';

const Shop = () => {
    /* useState */
    const [Data, setData] = useState([]);
    const [UniqueCategories, setUniqueCategories] = useState([])
    /* useEffect */
    useEffect(() => {
        if (Data.length === 0) {
            (async () => {
                try {
                    const response = await fetch("https://hifi-corner.herokuapp.com/api/v1/products");
                    const result = await response.json();
                    setData(result);
                    /* UniqueCategories */
                    const UniqueCategories = getUnique(
                        result.map((item) => item.category)
                    );
                    setUniqueCategories(UniqueCategories)
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [Data, UniqueCategories]);
    return (
        <>
            <Header>
                <Wrapper>
                    <IconMenu />
                    <MainMenu />
                </Wrapper>
            </Header>
            <main style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
                <ShopMenu categories={UniqueCategories} />
                <ShopProducts data={Data} />
            </main>
            <Footer />
        </>
    )
}

export default Shop

//  Sorting to one kind of each item
function getUnique(arr) {
    return arr.filter((e, i) => arr.indexOf(e) >= i);
}

