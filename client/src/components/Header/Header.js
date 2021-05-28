import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.scss';
import { auth } from '../Firebase/Firebase.utils';

import { ReactComponent as Logo } from '../../assets/sailboat.svg'

function Header() {
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className='header'>
            <Link className='logoContainer' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;