import React from 'react'
import { useDispatch } from 'react-redux';
import './CheckoutItem.scss'
import { addCartItem , clearItemFromCart, removeItem } from '../../redux/cart/cartSlice';

function CheckoutItem({ cartItem }) {
    const { id, name, imageUrl, quantity, price } = cartItem;
    const dispatch = useDispatch()

    return (
        <div className='checkoutItem'>
            <div className='imageContainer'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => dispatch(removeItem(cartItem))} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => dispatch(addCartItem(cartItem))} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => dispatch(clearItemFromCart(id))} className='removeButton'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
