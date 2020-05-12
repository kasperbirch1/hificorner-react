import React, { useState, useEffect } from 'react';

const useAxios = () => {
    const [Url] = useState("https://hifi-corner.herokuapp.com/api/v1/products")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then((result) => {
                console.log("ProductSliderFetch", result);
                setIsLoaded(true);
                setItems(result);
            },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [Url])


    return (
 
    )
}

export default useAxios
