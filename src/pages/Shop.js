import React, { useState, useEffect } from 'react'
import Header from "../components/Header/Header"
import Wrapper from '../components/Recycling/Wrapper';
import MainMenu from "../components/Header/MainMenu";
import IconMenu from '../components/Header/IconMenu';
import Footer from '../components/Footer/Footer'
import { ShopMenu } from '../components/Shop/StyledShopNav';
import { ShopProducts } from '../components/Shop/StyledShopProducts';

const Shop = (props) => {
    /* useState */
    const [Data, setData] = useState([]);
    const [Categories, setCategories] = useState([])
    const [Manufacturers, setManufacturers] = useState([])

    /* useEffect */
    useEffect(() => {
        if (true) {
            (async () => {
                try {
                    const response = await fetch("https://hifi-corner.herokuapp.com/api/v1/products");
                    const result = await response.json();
                    setData(result);
                    /* Unique */
                    const UniqueCategories = getUnique(
                        result.map((item) => item.category)
                    );
                    setCategories(UniqueCategories)
                    const UniqueManufacturers = getUnique(
                        result.map((item) => item.make)
                    );
                    setManufacturers(UniqueManufacturers)
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, []);
    return (
        <>
            <Header>
                <Wrapper>
                    <IconMenu />
                    <MainMenu />
                </Wrapper>
            </Header>
            <main style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
                <ShopMenu categories={Categories} manufacturers={Manufacturers} />
                <ShopProducts data={Data} slug={props.slug} />
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

