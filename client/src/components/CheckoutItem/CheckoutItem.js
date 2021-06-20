import React from 'react'
import { useDispatch } from 'react-redux';
import {
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton,
    TextContainer
} from './CheckoutItem.styles'
import { addCartItem , clearItemFromCart, removeItem } from '../../redux/cart/cartSlice';

function CheckoutItem({ cartItem }) {
    const { id, name, imageUrl, quantity, price } = cartItem;
    const dispatch = useDispatch()

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <TextContainer quantity>
                <div onClick={() => dispatch(removeItem(cartItem))} className='arrow'>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => dispatch(addCartItem(cartItem))} className='arrow'>&#10095;</div>
            </TextContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(id))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
