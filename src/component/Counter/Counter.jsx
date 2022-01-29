import React, { useState } from "react"

import Value from "./Value"
import s from './Counter.module.css'



const Counter = () => {

    const [count, setCount] = useState(1)
    const handleIncrement = () => {
        
        setCount(prevCount=>prevCount + 1) 
    }
    const handleDecrement = () => {
       
        setCount((prevCount) => {
            
            return Math.max(prevCount - 1, 1)
        }) 
    }

    return (
        <>
            <div className={s.counter}>
                <button onClick= {handleDecrement} className={s.counterBtn}>
                    -
                </button>
                        <Value value={count}/>
                <button onClick= {handleIncrement} className={s.counterBtn}>
                    +
                </button>
            </div>
        </>
    )
}
export default Counter