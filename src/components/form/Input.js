import React from "react";
import './Input.css'

const Input = ({type, id, placeholder}) => {
    return (
        <input
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
        />
    )
}

export default Input