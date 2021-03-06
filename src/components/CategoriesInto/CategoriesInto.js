import React, { useState, useEffect } from 'react'
import slugify from 'react-slugify';

import styled from 'styled-components'
import { CategoriesIntoCard } from './StyledCategoriesIntoCard'

const CategoriesInto = () => {
    /* useState */
    const [Data, setData] = useState([]);
    /* useEffect */
    useEffect(() => {
        if (Data.length === 0) {
            (async () => {
                try {
                    const response = await fetch("https://hifi-corner.herokuapp.com/api/v1/products");
                    const result = await response.json();
                    console.log("fetch Result", result);
                    /* test */
                    const uniqueCategories = getUnique(
                        result.map((item) => item.category)
                    );
                    console.log("uniqueCategories", uniqueCategories)
                    /* test end */
                    setData(uniqueCategories);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [Data]);

    return (
        <StyledCategoriesInto>
            <CategoriesIntoCard category="Shop By Brand" slug="/" />
            {Data.map((item, index) => {
                return (
                    <CategoriesIntoCard key={index} category={item} slug={slugify(item)} />
                )
            })}
        </StyledCategoriesInto>
    )
}

export default CategoriesInto

/*  */
//  Sorting to one kind of each item
function getUnique(arr) {
    return arr.filter((e, i) => arr.indexOf(e) >= i);
}

const StyledCategoriesInto = styled.section`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    grid-auto-rows: 200px;
    grid-gap: .1rem;
`
