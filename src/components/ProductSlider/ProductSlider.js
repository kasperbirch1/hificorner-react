import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { StyledSection } from './StyledSection';
// import placeholderImg from '../../images/product-placeholder.png'

import { ProductSliderContentContainer } from './ProductSliderContentContainer';
import { ProductSliderItem } from './ProductSliderItem';
const ProductSlider = () => {
    /* useState */
    const [Data, setData] = useState([]);
    const [Current, setCurrent] = useState(0)
    /* useEffect */
    useEffect(() => {
        if (Data.length === 0) {
            (async () => {
                try {
                    const response = await fetch("https://hifi-corner.herokuapp.com/api/v1/products");
                    const result = await response.json();
                    console.log("fetch Result", result);
                    setData(result);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [Data]);
    /* new array with React elements */
    const products = Data.map((element, index) => {
        return (
            <ProductSliderItem key={index} img={element.images[0]} title={element.make} description={element.description} />
        )
    })
    /* handleCurrent */
    function handleCurrent(e) {
        /*  */
        if (e.target.getAttribute("type") === "next") {
            if (Current < products.length - 1) {
                setCurrent(Current + 1)
            } else {
                setCurrent(0);
            }
        } else {
            if (Current > 0) {
                setCurrent(Current - 1)
            } else {
                setCurrent(products.length - 1);
            }
        }
    }


    return (
        <StyledSection>
            <FaAngleLeft onClick={e => handleCurrent(e)} />
            <ProductSliderContentContainer>
                {products[Current]}
            </ProductSliderContentContainer>
            <FaAngleRight type="next" onClick={e => handleCurrent(e)} />
        </StyledSection>
    )
}

export default ProductSlider



