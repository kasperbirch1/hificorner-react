import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProductSliderItem } from './ProductSliderItem'
import { StyledSection } from './StyledSection'
import { ProductSliderContentContainer } from './ProductSliderContentContainer';


const ProductSlider = () => {
    const [Url] = useState("https://hifi-corner.herokuapp.com/api/v1/products")
    const [Current, setCurrent] = useState(0)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then((result) => {
                console.log("ProductSliderFetch", result);
                setIsLoaded(true);
                setData(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [Url])

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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{ display: 'grid', placeContent: 'center', padding: '5rem' }}>Loading...</div>
    } else {
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
}




export default ProductSlider
