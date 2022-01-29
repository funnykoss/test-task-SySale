import React from "react";
import scales from '../../images/scales.svg'
import s from './Scales.module.css'

const Scales = () => {
    
    return (
        <>
            <div className={s.imgThumb}>
                <img src={scales} alt="scales" className={ s.icon}/> 
        </div>
        </>
    )
}

export default Scales