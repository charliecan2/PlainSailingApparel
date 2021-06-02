import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './CartIcon.scss';
import { setHidden } from '../../redux/cart/cartSlice';

function CartIcon() {
    const state = useSelector(state => state)
    let itemCount = selectCartItemsCount(state)

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setHidden())} className='cartIcon'>
            <ShoppingIcon className='shoppingIcon' />
            <span className='itemCount'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;
