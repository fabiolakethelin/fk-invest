import React from "react";
import './Input.css'

const Input = ({type, id, placeholder, handleOnChange, value}) => {
    return (
        <input
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default Input