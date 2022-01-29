import React from "react";
import Button from "../Button";
import VolumeAdvancer from '../VolumeAdvancer'
import s from './ProductCard.module.css'




const ProductCard = ({ cards }) => {
    
  
    return (
        <>
            <ul>
                 <Button width="71px" name="new" fontSize="14px" fontWeight="500" />
                {cards.map(({ id, img, title, description, price }) => (
                    
                    <li key={id}>
                        <img src={img} alt={title} />
                        <p>{title}</p>
                        <p>{ description}</p>
                        <p>{price}</p>
                    </li>
                )
                )}  
                <VolumeAdvancer  />
                 <Button width="300px" name="купить" />

            </ul>
              
        </>
    )
}

export default ProductCard