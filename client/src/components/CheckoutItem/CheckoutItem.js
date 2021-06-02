import React from 'react'
import './CheckoutItem.scss'

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, quantity, price } = cartItem;

    return (
        <div className='checkoutItem'>
            <div className='imageContainer'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='removeButton'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
