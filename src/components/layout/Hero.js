import React from "react";
import Input from "../form/Input";
import Button from "../form/Button";
import Crypto from '../../assets/hero-img.png'
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="left">
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrency with your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <Input type='email' id='email' placeholder='Enter your email'/>
                    <Button type='button' text='Learn More' />
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt='Crytocurrency' />
                </div>
            </div>
        </div>
    )
}

export default Hero