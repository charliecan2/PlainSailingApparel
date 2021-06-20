import React from 'react';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import StripeButton from '../StripeButton/StripeButton';
import { 
    CheckoutPage,
    CheckoutHeader,
    HeaderBlock,
    NoItemsPreview,
    TotalPreview,
    TestWarning
} from './Checkout.styles'


import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

function Checkout() {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutPage>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {   cartItems.length ?
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                ) :
                <NoItemsPreview>No Items to Display</NoItemsPreview>
            }
            <TotalPreview>
                <span>Total: ${cartTotal}</span>
            </TotalPreview>
            <TestWarning>
                *Please use the following test credit card for payment*
                <br />
                4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
            </TestWarning>
            <StripeButton price={cartTotal} />
        </CheckoutPage>
    )
}

export default Checkout
