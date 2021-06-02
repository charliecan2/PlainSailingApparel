import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'

function CartDropdown() {
    const state = useSelector(state => state);
    let cartItems = selectCartItems(state);

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
