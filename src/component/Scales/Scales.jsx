import React  from "react";
import scales from '../../images/scales.svg'
import marker from '../../images/marker.svg'
import s from './Scales.module.css'
import { useState } from "react";

const Scales = () => {
    const [active, setActive] = useState(false)
    const toggleClick = (event) => {
         event.preventDefault();
        setActive(active=>!active)
    }

    return (
        <>
            <div className={s.imgThumb} onClick={toggleClick}>
                {active
                    ?<img src={marker} alt="scales" className={ s.icon}/> 
                    :<img src={scales} alt="scales" className={ s.icon}/> 
                }
        </div>
        </>
    )
}

export default Scales