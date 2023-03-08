import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Container from './Container'
import LinkButton from './LinkButton'
import './NavBar.css'

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)

    return (
        <nav className='header'>
            <Container>
                <h1><span>FK</span> Invest</h1>
                <ul className={open ? 'list active' : 'list'} onClick={handleClick}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='featured' smooth={true}>Featured</Link>
                    </li>
                    <li>
                        <Link to='/earn'>Earn</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div>
                    <LinkButton to="#" text='Connect Wallet' />
                </div>
                <div className='burger' onClick={handleClick}>
                    {open ? <FaTimes /> : <FaBars /> }
                </div>
                <div className={open ? 'closemenu' : 'closemenu desactived'} onClick={handleClick}/>
            </Container>
        </nav>
    )
}

export default NavBar