import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
    CartIconContainer,
    ItemCount,
    ShoppingIconContainer
} from './CartIcon.styles'

import { setHidden } from '../../redux/cart/cartSlice';

function CartIcon() {
    const state = useSelector(state => state)
    let itemCount = selectCartItemsCount(state)

    const dispatch = useDispatch();

    return (
        <CartIconContainer onClick={() => dispatch(setHidden())}>
            <ShoppingIconContainer />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
