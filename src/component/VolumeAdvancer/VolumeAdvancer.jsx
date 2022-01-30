import React, { useRef, useState } from "react";
import s from './VolumeAdvancer.module.css'

// import s from './VolumeAdvancer.css'

const VolumeAdvancer = () => {
    const form = useRef()
    const [size, setSize] = useState("100")
    const handleChange = (event) => {
         setSize(event.currentTarget.value)
    }
  
    return (
        <>
            
         <form ref={form} className={s.radioBtnVolume}>
        <label className={s.radioBtn} htmlFor="pink">
         <input className={s.radioBtnChecked}
            name="value"
            type="radio"
            value="100"
                    onChange={handleChange}
                    checked={size==="100"}
                        id="white"
                       
                    />
                100 мл
        </label>
        <label className={s.radioBtn} htmlFor="white">
        <input className={s.radioBtnChecked}
            name="value"
            type="radio"
            value="200"
                    onChange={handleChange}
                        checked={size === "200"}
                        id="pink"
                       
                />
                 200 мл
      </label>
        <label htmlFor="red">
        <input className={s.radioBtnChecked}
            name="value"
            type="radio"
            value="300"
                    onChange={handleChange}
                        checked={size === "300"}
                        id="red"
                       
                />
                 300 мл
        </label>
            </form>
  
     </>
    )
}

export default VolumeAdvancer