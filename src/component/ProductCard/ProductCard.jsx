import React, {useState} from "react";
import Button from "../Button";
import VolumeAdvancer from "../VolumeAdvancer";
import s from "./ProductCard.module.css";

import ColorAdvancer from "../ColorAdvancer";
import Scales from "../Scales";
import ProductPrice from '../ProductPrice'
import Value from "../Counter/Value"


const ProductCard = ({ cards }) => {
 
  const [price, setPrice]=useState(200)
  const [hovered, setHovered] = useState(false)

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
  const changeImg = (event) => {
    setHovered(hovered => !hovered)
  }
  // const changePrice = (event) => {
  //   console.log(price);
  // }

  

  return (
    <>
      <div className={s.section}>
        <Scales />
        <div className={s.statusBtn}>
          <Button width="71px" name="new" fontSize="14px" fontWeight="500" />
        </div>
        <ul className={s.productCardItem}>
          {cards.map(({ id, img, title, description, imgLarge }) => (
            <li key={id}>
              <div className={s.imgThumb}  >
                {hovered
                  ? <img src={imgLarge} alt={title} className={s.cardImg} onMouseLeave={changeImg}/>
                  : <img src={img} alt={title} className={s.cardImg} onMouseEnter={changeImg}/>
                }
                 
              </div>
             
              <p className={s.cardTitle}>{title}</p>
              <p className={s.cardDescription}>{description}</p>
              
            </li>
          ))}
        </ul>
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
      </div>
    </>
  );
};

export default ProductCard;
