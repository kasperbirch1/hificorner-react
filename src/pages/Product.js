import React, { useEffect, useState } from 'react'
import { Link } from "@reach/router";
import slugify from 'react-slugify';
import styled from 'styled-components'
import Header from "../components/Header/Header"
import Wrapper from '../components/Recycling/Wrapper';
import MainMenu from "../components/Header/MainMenu";
import IconMenu from '../components/Header/IconMenu';

const Product = ({ sku }) => {
    const [Url] = useState(`https://hifi-corner.herokuapp.com/api/v1/products/${sku}`)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then((result) => {
                console.log("Product", result);
                setIsLoaded(true);
                setData(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [Url])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{ display: 'grid', placeContent: 'center', padding: '5rem' }}>Loading...</div>
    } else {
        return (
            <>
                <Header>
                    <Wrapper>
                        <IconMenu />
                        <MainMenu />
                    </Wrapper>
                </Header>
                <main style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div style={{ margin: '2rem 1rem' }}>
                        <img src={Data.images} alt={Data.make} />
                    </div>
                    <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', margin: '2rem 1rem' }}>
                        <h1>{Data.model}</h1>
                        <h2>{Data.make}</h2>
                        <h2 style={{ color: "rgb(163, 145, 97)" }}>{Data.price}</h2>
                        <Link to={`/shop/${slugify(Data.make)}`}>See more products from {Data.make}</Link>
                        <Link to={`/shop/${slugify(Data.category)}`}>See other {Data.category}</Link>
                        <h3>Description</h3>
                        <p>{Data.description}</p>
                        <StyledBtn href="https://www.hificorner.co.uk/ask-a-question">Ask a Question</StyledBtn>
                        <StyledBtn href="https://www.hificorner.co.uk/part-exchange">Part Exchange</StyledBtn>
                        <StyledBtn href="https://www.hificorner.co.uk/pay-by-finance">Pay by Finance</StyledBtn>
                        <StyledBtn href="https://www.hificorner.co.uk/seen-a-better-price">Seen a Better Price?</StyledBtn>
                    </div>
                </main>
            </>
        )
    }
}

export default Product


const StyledBtn = styled.a`
    display: inline-block;
    margin: .25rem; 
    color: #fff ;
    padding: 10px 5px;
    background-color: #a39161;
    text-transform: uppercase;
    text-align: center;
    font-size: 13px;
    white-space: nowrap;
`