import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="title">InviteApp</div>
                <nav className='nav'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="links">
                    <Button title='LOGIN' />
                </div>
            </div>
        </header>
    )
}

export default Header
