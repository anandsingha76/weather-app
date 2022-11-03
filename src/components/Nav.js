import React from 'react';
import logo from '../assets/logo.gif';
import './Nav.css';
import { Link } from 'react-router-dom';






const Nav = () => {
    return (
        <>
            <nav className='nav-area'>
                <Link className='logo-container'>
                    <img src={logo} className='logo' alt="logo" />
                    <h3 className='app-logo'>Weather Forecast App</h3>
                </Link>

                <div className='right-area'>
                    <ul className='right'>
                        <li className='right-style'><Link to="/">Home</Link></li>
                        <li className='right-style'><Link to="/weatherForecast">Get Weather</Link></li>
                        <li className='right-style'><Link to="/convertor">Temperature Convertor</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;
