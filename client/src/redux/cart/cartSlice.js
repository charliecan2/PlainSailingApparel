import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCartItem: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;