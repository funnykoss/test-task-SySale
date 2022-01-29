import React from "react";

const ProductCard = ({ cards }) => {

    return (
        <>
            <ul>
                {cards.map(( {id, img, title, description, price} ) => (
                    <li key={id}>
                        <img src={img} alt={title} />
                        <p>{title}</p>
                        <p>{ description}</p>
                        <p>{ price}</p>
                    </li>
              
                )
                )}     
        </ul>
        </>
    )
}

export default ProductCard