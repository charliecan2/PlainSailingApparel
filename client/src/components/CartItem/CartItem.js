import React from 'react'
import './CartItem.scss'

function CartItem({ item }) {

    const { imageUrl, price, name, quantity } = item;
    return (
        <div className='cartItem'>
            <img src={imageUrl} alt='cart-item'/>
            <div className='itemDetails'>
                <span className='itemName'>{name}</span>
                <span className='itemPrice'>
                    {quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
