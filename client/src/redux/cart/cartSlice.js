import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, filteredItems, removeItemFromCart } from './cart.utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        hidden: true,
        cartItems: []
    },
    reducers: {
        setHidden: (state) => {
            state.hidden = !state.hidden
        },
        addCartItem: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload)  
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = filteredItems(state.cartItems, action.payload)
        },
        removeItem: (state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload)
        }
    }
})

export const { 
    setHidden, addCartItem, clearItemFromCart, removeItem 
} = cartSlice.actions;

export default cartSlice.reducer;