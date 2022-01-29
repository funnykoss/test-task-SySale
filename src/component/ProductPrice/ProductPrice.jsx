import React from "react";
import s from './ProductPrice.module.css'


const ProductPrice = ({price}) => {
    return (
        <>
        <p className={s.price} >{price}грн</p>
        </>
    )
}

export default ProductPrice