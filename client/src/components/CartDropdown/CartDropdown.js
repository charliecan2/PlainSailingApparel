import React from 'react';
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    CheckoutLink,
    CheckoutButton
} from './CartDropdown.styles'
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { setHidden } from '../../redux/cart/cartSlice';

function CartDropdown() {
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch()
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    cartItems.map(item => {
                        return <CartItem key={item.id} item={item}/>
                    }) :
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <CheckoutLink to='/checkout'>
                <CheckoutButton onClick={() => dispatch(setHidden())}>GO TO CHECKOUT</CheckoutButton>
            </CheckoutLink>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown
