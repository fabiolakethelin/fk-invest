import React from "react"
import Crypto from '../../assets/trade.png'
import Input from "../form/Input"
import Button from "../form/Button"
import './Earn.css'

const Earn = () => {
    return (
        <div className="earn">
            <div className="left">
                <img src={Crypto} alt="" />
            </div>
            <div className="right">
                <h2>Earn passive income with crypto</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits</p>
                <div className="input-container">
                    <Input type="email" id="email" placeholder="Enter your email" />
                    <Button type='button' text='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default Earn