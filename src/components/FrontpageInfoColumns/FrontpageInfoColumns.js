import React from 'react'
import { StyledGridColumnsContainer } from '../StyledGridColumnsContainer'

import styled from 'styled-components'
const StyledArticle = styled.article`
    background-color: black;
    padding: 3rem;
    text-align: center;
    text-transform: uppercase;

    a {
        display: inline-block;
        font-size: 2rem;
        color: #a09167;
        margin-bottom: 2rem;
        padding: .5rem 2rem;
        border: 1px solid #fff;
        :hover {
            color: #706c71; 
            border: 1px solid #706c71;
        }
    }

    p {
        color: white;
        line-height: 1.7;
        font-weight: 100;
        letter-spacing: 2px;
    }

`


const InfoColumn = ({ url, title, paragraph }) => {
    return (
        <StyledArticle>
            <a href={url}>{title}</a>
            <p>{paragraph}</p>
        </StyledArticle>
    )
}

const FrontpageInfoColumns = () => {
    return (
        <StyledGridColumnsContainer>
            <InfoColumn url="/history" title="history" paragraph="ESTABLISHED IN THE LATE 1960S, OUR FAMILY OWNED BUSINESS IS BASED IN EDINBURGH AND FALKIRK, SERVICING CUSTOMERS ACROSS THE UK." />
            <InfoColumn url="/news" title="NEWS" paragraph="CHECK OUT OUR LATEST NEWS STORIES FOR ALL THE UP TO DATE HI-FI CORNER PRODUCTS AND LAUNCHES." />
            <InfoColumn url="/shop" title="SHOP" paragraph="HAVE A LOOK IN OUR ONLINE SHOP FOR GREAT PRODUCTS AND DEALS." />
        </StyledGridColumnsContainer>
    )
}

export default FrontpageInfoColumns
