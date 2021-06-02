import React from 'react';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import './Checkout.scss';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

function Checkout() {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkoutPage'>
            <div className='checkoutHeader'>
                <div className='headerBlock'>
                    <span>Product</span>
                </div>
                <div className='headerBlock'>
                    <span>Description</span>
                </div>
                <div className='headerBlock'>
                    <span>Quantity</span>
                </div>
                <div className='headerBlock'>
                    <span>Price</span>
                </div>
                <div className='headerBlock'>
                    <span>Remove</span>
                </div>
            </div>
            {   cartItems.length ?
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                ) :
                <div className='noItems'>No Items to Display</ div>
            }
            <div className='total'>
                <span>Total: ${cartTotal}</span>
            </div>
        </div>
    )
}

export default Checkout
