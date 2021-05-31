import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './cart.utils';

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
        }
    }
})

export const { setHidden ,addCartItem } = cartSlice.actions;

export default cartSlice.reducer;