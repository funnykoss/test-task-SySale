import React,  { useState } from "react"
import List from './List'
import colors from '../../JSON/colors.json'



const ColorAdvancer = () => {
    const [visible, setVisible] = useState(false);
    const toggleList = event => {
    event.preventDefault();
    setVisible(visible => !visible);
  };

    return (
        <>
            <p onClick={toggleList}>Цвет</p>
            {visible &&  <List colors={colors}/>}
           
        </>
    )
}

export default ColorAdvancer