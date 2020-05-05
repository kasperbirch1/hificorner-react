import React from 'react';
export const ProductSliderItem = ({ img, title, description }) => {
    return (
        <article>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </article>);
};
