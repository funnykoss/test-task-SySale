import React, { useState} from "react";

import Button from "../Button";
import VolumeAdvancer from "../VolumeAdvancer";
import s from "./ProductCard.module.css";
import ColorAdvancer from "../ColorAdvancer";
import Scales from "../Scales";
import ProductPrice from '../ProductPrice'
import Value from "../Value"
import PhotoHover from "../PhotoHover";
import cards from '../../JSON/cards.json'

const ProductCard = () => {



  const [price, setPrice] = useState(200)
  
 
  const [count, setCount] = useState(1)
  
  
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1) 
      incrementPrice()
    }
  function incrementPrice(){
  return setPrice(prevPrice=>prevPrice+200)
  }
  const handleDecrement = () => {
      
    setCount(prevCount =>
      Math.max(prevCount - 1, 1)
    )
  decrementPrice()
       
  } 
  function decrementPrice() {
  
    setPrice(prevPrice => {
      if (prevPrice <= 200) {
        return 200
      }
      return prevPrice-200
    })
  } 
  
 
  return (
    <>
      <div className={s.section} >
        <ul className={s.productCardList} >
          {cards.map((card) => (
            <li key={card.id} className={s.productCardItem} >
               <Scales />
              <div className={s.statusBtn}>
               <Button width="71px" name="new" fontSize="14px" fontWeight="500" />
              </div>
              <PhotoHover imgLarge={card.imgLarge} img={card.img} name={card.name} />
            
             
              <p className={s.cardTitle}>{card.title}</p>
              <p className={s.cardDescription}>{card.description}</p>
              
               <ProductPrice price={price} />
                <ColorAdvancer />
                <div className={ s.advancer}>
                <VolumeAdvancer />
                </div>
      
                <div className={s.bottomBtn}>
                <div className={s.counter}>
                        <button onClick= {handleDecrement} className={s.counterBtn}>
                            -
                        </button>
                                <Value value={count}/>
                        <button onClick= {handleIncrement} className={s.counterBtn}>
                            +
                        </button>
                    </div>
                  <Button width="302px" name="купить" fontSize="18px" fontWeight="600"/>
                </div>
            </li>
          ))}
        </ul>
       
      </div>
    </>
  );
};

export default ProductCard;
