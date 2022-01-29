import React, { useState } from "react"

import Value from "./Value"



const Counter = () => {

    const [value, setValue] = useState("1")
    const handleIncrement = () => {
        setValue(prevValue => 
          prevValue +1) 
    }
    const handleDecrement = () => {
        setValue(prevValue => 
            prevValue-1)
    }

    return (
        <>
            <button onClick= {handleDecrement}>
                -
         </button>
           
                <Value value={value}/>
           <button onClick= {handleIncrement}>
               +
         </button>
               
         
        </>
    )
}
export default Counter