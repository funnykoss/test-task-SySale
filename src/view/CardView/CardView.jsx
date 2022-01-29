import React from "react";
import ProductCard from '../../component/ProductCard'
import card1 from '../../JSON/card1.json'
import card2 from '../../JSON/card2.json'
import card3 from '../../JSON/card3.json'
import s from './CardView.module.css'

const CardView = () => {
    return (
        <>
            <div className={s.cards}>
                <div className={s.cardsItem}>
                <ProductCard cards={card1} />

                </div>
                <div className={s.cardsItem}>
 <                  ProductCard cards={card2} />
                </div>
               
                <div className={s.cardsItem}>
                    <ProductCard cards={card3} />  
                </div>
              
           </div>
              
          
        </>
    )
}


export default CardView
