import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';

import './CartIcon.scss';
import { setHidden } from '../../redux/cart/cartSlice';

function CartIcon() {
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setHidden())} className='cartIcon'>
            <ShoppingIcon className='shoppingIcon' />
            <span className='itemCount'>0</span>
        </div>
    )
}

export default CartIcon;
