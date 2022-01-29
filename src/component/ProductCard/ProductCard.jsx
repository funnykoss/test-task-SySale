import React from "react";
import Button from "../Button";
import VolumeAdvancer from "../VolumeAdvancer";
import s from "./ProductCard.module.css";
import Counter from "../Counter";
import ColorAdvancer from "../ColorAdvancer";
import Scales from "../Scales";

const ProductCard = ({ cards }) => {
  return (
    <>
      <div className={s.section}>
        <Scales />
        <div className={s.statusBtn}>
          <Button width="71px" name="new" fontSize="14px" fontWeight="500" />
        </div>
        <ul className={s.productCardItem}>
          {cards.map(({ id, img, title, description, price }) => (
            <li key={id}>
              <div className={s.imgThumb}>
                 <img src={img} alt={title} className={s.cardImg} />
              </div>
             
              <p className={s.cardTitle}>{title}</p>
              <p>{description}</p>
              <p>{price}</p>
            </li>
          ))}
        </ul>
        <ColorAdvancer />
        <VolumeAdvancer />
        <div className={s.bottomBtn}>
          <Counter />
          <Button width="300px" name="купить" />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
