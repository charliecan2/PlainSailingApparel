import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

function CartDropdown() {
    return (
        <div className='cartDropdown'>
            <div className='cartItems'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
