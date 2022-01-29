import React, { useRef, useState } from "react";


const VolumeAdvancer = () => {
    const form = useRef()
    console.log(form);
    const [size, setSize] = useState("100")
    const handleChange = (event) => {
        console.log("current target", event.currentTarget);
        console.log("target", event.target);
         setSize(event.currentTarget.value)
    }
    
    return (
        <>
            <form ref={form}>
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