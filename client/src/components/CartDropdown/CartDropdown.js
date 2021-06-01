import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'

function CartDropdown() {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <div className='cartDropdown'>
            <div className='cartItems'>
                {cartItems.map(item => {
                    return <CartItem key={item.id} item={item}/>
                })}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
