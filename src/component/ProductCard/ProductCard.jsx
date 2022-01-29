import React, {useState} from "react";
import Button from "../Button";
import VolumeAdvancer from "../VolumeAdvancer";
import s from "./ProductCard.module.css";
import Counter from "../Counter";
import ColorAdvancer from "../ColorAdvancer";
import Scales from "../Scales";


const ProductCard = ({ cards }) => {
  const [hovered, setHovered] = useState(false)
  const changeImg = (event) => {
    
    setHovered(hovered=>!hovered)
  }
  
  return (
    <>
      <div className={s.section}>
        <Scales />
        <div className={s.statusBtn}>
          <Button width="71px" name="new" fontSize="14px" fontWeight="500" />
        </div>
        <ul className={s.productCardItem}>
          {cards.map(({ id, img, title, description, price, imgLarge }) => (
            <li key={id}>
              <div className={s.imgThumb} onBlur={changeImg} >
                {hovered
                  ? <img src={imgLarge} alt={title} className={s.cardImg} onMouseLeave={changeImg}/>
                  : <img src={img} alt={title} className={s.cardImg} onMouseEnter={changeImg}/>
                }
                 
              </div>
             
              <p className={s.cardTitle}>{title}</p>
              <p className={s.cardDescription}>{description}</p>
              <p className={s.price}>{price}</p>
            </li>
          ))}
        </ul>
        <ColorAdvancer />
        <div className={ s.advancer}>
          <VolumeAdvancer />
        </div>
      
        <div className={s.bottomBtn}>
          <Counter />
          <Button width="302px" name="купить" fontSize="18px" fontWeight="600"/>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
