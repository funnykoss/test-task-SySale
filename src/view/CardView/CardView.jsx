import React from "react";
import Button from "../../component/Button";
import ProductCard from '../../component/ProductCard'
import cards from '../../JSON/cards.json'

const CardView = () => {
    return (
        <>
        {/* <Button width="300px" name="купить" />
            <Button width="71px" name="new" fontSize="14px" fontWeight="500" /> */}
            <ProductCard cards={ cards}/>
        </>
    )
}


export default CardView
