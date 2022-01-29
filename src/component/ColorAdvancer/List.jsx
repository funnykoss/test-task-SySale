/* eslint-disable react-hooks/exhaustive-deps */

import React  from 'react'
import s from './ColorAdvancer.module.css'


const List = ({ colors}) => {

   
    return (
        <>
            <ul className={s.colorsList} >
                {colors.map(({ id, color }) => (
                    <li key={id} className={s.colorItem}>
                        {color}
                    </li>

                ))}
        </ul>
        </>
    )
}
export default List 