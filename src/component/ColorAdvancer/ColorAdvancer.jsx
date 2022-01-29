/* eslint-disable react-hooks/exhaustive-deps */
import React,  { useState } from "react"
import List from './List'
import colors from '../../JSON/colors.json'
import s from './ColorAdvancer.module.css'
import { IoIosArrowDown } from 'react-icons/io';



const ColorAdvancer = () => {
    const [visible, setVisible] = useState(false);
    const toggleList = event => {
        console.log(event);
    event.preventDefault();
    setVisible(visible => !visible);
    };
    

    return (
        <>
            <div className={s.colorAdvancer}  onClick={toggleList} >
                <p className={s.title}>Цвет</p>
                {visible && <List colors={colors} />}
                <IoIosArrowDown className={ s.advancerIcon}/>
            </div>
            
           
        </>
    )
}

export default ColorAdvancer