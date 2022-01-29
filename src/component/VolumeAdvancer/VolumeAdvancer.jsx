import React, { useRef, useState } from "react";

// import s from './VolumeAdvancer.css'

const VolumeAdvancer = () => {
    const form = useRef()
    const [size, setSize] = useState("100")
    const handleChange = (event) => {
         setSize(event.currentTarget.value)
    }
    
    return (
        <>
            <form ref={form} className="radioBtnVolume">
   <label>
         <input
            name="value"
            type="radio"
            value="100"
                    onChange={handleChange}
                    checked={size==="100"}
                />
                100 мл
     </label>
       <label>
        <input
            name="value"
            type="radio"
           value="200"
                    onChange={handleChange}
                     checked={size==="200"}
                />
                 200 мл
      </label>
        <label>
        <input
            name="value"
            type="radio"
            value="300"
                    onChange={handleChange}
                    checked={size==="300"}
                />
                 300 мл
        </label>
            </form>
  
     </>
    )
}

export default VolumeAdvancer