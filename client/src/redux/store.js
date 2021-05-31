import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './user/userSlice';
import hiddenSlice from './hidden/hiddenSlice';
import cartSlice from './cart/cartSlice';
import { logger } from 'redux-logger';

const middleware = [logger]

export default configureStore({
    reducer: {
        user: userSlice,
        hidden: hiddenSlice,
        cart: cartSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setCurrentUser', 'cart/addCartItem', 'cart/setHidden']
        }
    }).concat(...middleware), 
})
