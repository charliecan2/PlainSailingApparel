import React from 'react';
import { Link } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { setHidden } from '../../redux/cart/cartSlice';

function CartDropdown() {
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch()
    return (
        <div className='cartDropdown'>
            <div className='cartItems'>
                {
                    cartItems.length ? 
                    cartItems.map(item => {
                        return <CartItem key={item.id} item={item}/>
                    }) :
                    <span className='emptyMessage'>Your cart is empty</span>
                }
            </div>
            <Link to='/checkout'>
                <CustomButton onClick={() => dispatch(setHidden())}>GO TO CHECKOUT</CustomButton>
            </Link>
            
        </div>
    )
}

export default CartDropdown
