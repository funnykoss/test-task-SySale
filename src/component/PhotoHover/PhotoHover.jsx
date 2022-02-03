
import React, {useState} from "react";
import s from './PhotoHover.module.css'

const PhotoHover = ({imgLarge, name, img}) => {
    const [hovered, setHovered] = useState(false)
      const handleHover = () => {

         setHovered(hovered=>!hovered)
              } 


    return (
        <>
            <div className={s.imgThumb} onMouseLeave={handleHover} onMouseEnter={handleHover}>
        {hovered 
            ? <img src={imgLarge} alt={name} className={s.cardImg} />
            : <img src={img} alt={name} className={s.cardImg}  />
        }
            
        </div>
        </>
    )
}

export default PhotoHover