import React from 'react';

import { Link } from 'react-router-dom';

import HeaderLogo  from '../../assets/crown.svg';

const Header = () => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <img src={HeaderLogo} className='logo' alt='Header Logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header;