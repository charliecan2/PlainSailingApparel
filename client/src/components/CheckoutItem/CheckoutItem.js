import React from 'react'
import { useDispatch } from 'react-redux';
import {
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton
} from './CheckoutItem.styles'
import './CheckoutItem.scss'
import { addCartItem , clearItemFromCart, removeItem } from '../../redux/cart/cartSlice';

function CheckoutItem({ cartItem }) {
    const { id, name, imageUrl, quantity, price } = cartItem;
    const dispatch = useDispatch()

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => dispatch(removeItem(cartItem))} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => dispatch(addCartItem(cartItem))} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(id))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
