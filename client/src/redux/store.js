import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import userSlice from './user/userSlice';
import cartSlice from './cart/cartSlice';
import directorySlice from './directory/directorySlice';
import shopSlice from './shop/shopSlice';
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'

const middleware = [logger]

const reducers = combineReducers({
    user: userSlice,
    cart: cartSlice,
    directory: directorySlice,
    shop: shopSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const persistedRecuer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedRecuer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setCurrentUser', 'cart/addCartItem', 'cart/setHidden', 'cart/clearItemFromCart']
        }
    }).concat(...middleware), 
})

export default store