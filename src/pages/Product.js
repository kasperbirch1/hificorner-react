import React, { useEffect, useState } from 'react'
import { Link } from "@reach/router";
import slugify from 'react-slugify';
import styled from 'styled-components'
import Header from "../components/Header/Header"
import Wrapper from '../components/Recycling/Wrapper';
import MainMenu from "../components/Header/MainMenu";
import IconMenu from '../components/Header/IconMenu';
import Footer from '../components/Footer/Footer'

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
                <StyledMainContainer>
                    <section>
                        <img src={Data.images} alt={Data.make} />
                    </section>
                    <section>
                        <StyledinfoContainer>
                            <div>
                                <h1>{Data.model}</h1>
                                <h2>{Data.make}</h2>
                            </div>
                            <StyledPrice>{Data.price}</StyledPrice>
                        </StyledinfoContainer>
                        <StyledLinkContainer>
                            <Link to={`/shop/${slugify(Data.make)}`}>See more products from {Data.make}</Link>
                            <Link to={`/shop/${slugify(Data.category)}`}>See other {Data.category}</Link>
                        </StyledLinkContainer>
                        <StyledDescriptionContainer>
                            <h3>Description</h3>
                            <p>{Data.description}</p>
                        </StyledDescriptionContainer>
                        <StyledBtnContainer >
                            <StyledBtn href="https://www.hificorner.co.uk/ask-a-question">Ask a Question</StyledBtn>
                            <StyledBtn href="https://www.hificorner.co.uk/part-exchange">Part Exchange</StyledBtn>
                            <StyledBtn href="https://www.hificorner.co.uk/pay-by-finance">Pay by Finance</StyledBtn>
                            <StyledBtn href="https://www.hificorner.co.uk/seen-a-better-price">Seen a Better Price?</StyledBtn>
                        </StyledBtnContainer>
                    </section>
                </StyledMainContainer>
                <Footer />
            </>
        )
    }
}

export default Product


const StyledinfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr) 
`


const StyledMainContainer = styled.main`
 @media (min-width: 400px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
    > section {
        padding: 1rem;
        :first-child {
            img {width: 300px; display: block; margin: 0 auto}
        }
        :last-child {
            background-color: #f3f3f3;
            h1 {
                color: #706c71;
            }
        }
    }
`
const StyledPrice = styled.h3`
    color: rgb(163, 145, 97);
    font-size: 2.5rem;

    ::after {
        content: ' kr.';
        font-size: 1.5rem;
        color: black;
    }
`

const StyledBtn = styled.a`
    display: inline-block;
    /* margin: 1rem .25rem .5rem 0;  */
    color: #fff ;
    padding: .75rem .5rem;
    background-color: #a39161;
    text-transform: uppercase;
    text-align: center;
    font-size: .8rem;
    white-space: nowrap;
    :hover {
        color: #706c71;
    }
`

const StyledBtnContainer = styled.div`
    margin: 1rem 0;
    display: grid; 
    grid-template-columns: repeat(2,1fr);
    grid-gap: .5rem;
`

const StyledLinkContainer = styled.div`
    margin: 1rem 0;
    a {
        display: block;
        color: #a39161;
    }
`

const StyledDescriptionContainer = styled.article`
    margin: 1rem 0;
    h3 {
        color: #706c71;
        font-weight: 600;
        line-height: 1.1;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
`