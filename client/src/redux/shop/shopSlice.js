import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from '../../pages/Shop/shop.data'

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        collections: SHOP_DATA
    }
})

export default shopSlice.reducer;