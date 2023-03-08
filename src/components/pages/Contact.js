import React, { useState } from "react"
import Input from '../form/Input'
import './Contact.css'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="contact-container">
            <h1 className="title">Contact</h1>
            <form className="form" onSubmit={() => {}}>
                <Input
                    className="input"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    handleOnChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input
                    className="input"
                    type="text"
                    id="name"
                    placeholder="Enter your email"
                    handleOnChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <textarea
                    className="textarea"
                    placeholder="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <Input className="input" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact