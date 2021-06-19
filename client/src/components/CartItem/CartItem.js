import React from 'react'
import { 
    CartItemContainer,
    ItemDetails,
    ItemName,
    ItemImage
} from './CartItem.styles'

function CartItem({ item }) {

    const { imageUrl, price, name, quantity } = item;
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt='cart-item'/>
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='itemPrice'>
                    {quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
