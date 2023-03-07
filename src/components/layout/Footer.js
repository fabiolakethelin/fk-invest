import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <h1><span>FK</span>Invest</h1>
            <div className="menu">
                <h5>Support</h5>
                <span className="bar"></span>
                    <a href="/">Contact Us</a>
                    <a href="/">Chat</a>
                    <a href="/">Help Center</a>
                    <a href="/">FAQ</a>
            </div>
            <div className="menu">
                <h5>Developer</h5>
                <span className="bar"></span>
                    <a href="/">Cloud</a>
                    <a href="/">Commerce</a>
                    <a href="/">Pro</a>
                    <a href="/">API</a>
            </div>
            <div className="menu">
                <h5>company</h5>
                <span className="bar"></span>
                    <a href="/">About</a>
                    <a href="/">Information</a>
                    <a href="/">Legal</a>
                    <a href="/">Privacy</a>
            </div>
            <div className="menu">
                <h5>Social</h5>
                <span className="bar"></span>
                    <a href="https://github.com/fabiolakethelin" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/fabiolakethelin" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href="/"><FaFacebook /></a>
                    <a href="/"><FaTwitter /></a>
            </div>
        </div>
    )
}

export default Footer