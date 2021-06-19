import React from 'react';
import { useSelector } from 'react-redux';
import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './Header.styles';
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
        <HeaderContainer>
            <LogoContainer className='logoContainer' to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            { 
                hidden ? <div /> :
                <CartDropdown />
            }
        </HeaderContainer>
    )
}

export default Header;
