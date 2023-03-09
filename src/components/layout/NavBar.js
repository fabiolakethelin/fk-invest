import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Button from "../form/Button";
import './NavBar.css'

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)

    return (
        <nav className='header'>
            <div className="container">
                <Link to='/'><h1><span>FK</span> Invest</h1></Link>
                <ul className={open ? 'list active' : 'list'} onClick={handleClick}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/featured'>Featured</Link>
                    </li>
                    <li>
                        <Link to='/earn'>Earn</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div>
                    <Button type='button' text='Connect Wallet' />
                </div>
                <div className='burger' onClick={handleClick}>
                    {open ? <FaTimes /> : <FaBars /> }
                </div>
                <div className={open ? 'closemenu' : 'closemenu desactived'} onClick={handleClick}/>
            </div>
        </nav>
    )
}

export default NavBar