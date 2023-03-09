import React, { useState } from "react"
import emailjs from '@emailjs/browser'
import Input from '../form/Input'
import Button from "../form/Button"
import './Contact.css'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_76hwctq", "template_7cble4o", templateParams, "XnQMRyfMBxrwWWJb6")
        .then((resp) => {
            console.log(resp)
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="contact-container">
            <h1 className="title">Contact</h1>
            <form className="form" onSubmit={sendEmail}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    handleOnChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter your email"
                    handleOnChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <textarea
                    className="textarea"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                />
                <Button type="submit" text='Send'/>
            </form>
        </div>
    )
}

export default Contact