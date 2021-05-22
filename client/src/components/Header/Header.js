import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

import { ReactComponent as Logo } from '../../assets/sailboat.svg'

function Header() {
    return (
        <div className='header'>
            <Link className='logoContainer' to='/'>
                <Logo className='logo'/>
            </Link>
            <h1 className='siteTitle'>
                Plain Sailing Apparel
            </h1>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header
