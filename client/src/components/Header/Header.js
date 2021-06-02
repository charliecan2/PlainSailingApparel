import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.scss';
import { auth } from '../Firebase/Firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/sailboat.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors';

function Header() {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectHidden);

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
                <CartIcon />
            </div>
            { 
                hidden ? <div /> :
                <CartDropdown />
            }
        </div>
    )
}

export default Header;
