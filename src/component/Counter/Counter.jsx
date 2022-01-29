import React, { useState } from "react"

import Value from "./Value"
import s from './Counter.module.css'



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
            <div className={s.counter}>
                <button onClick= {handleDecrement} className={s.counterBtn}>
                    -
                </button>
                        <Value value={value}/>
                <button onClick= {handleIncrement} className={s.counterBtn}>
                    +
                </button>
            </div>
        </>
    )
}
export default Counter