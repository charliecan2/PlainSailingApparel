import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './user/userSlice';
import hiddenSlice from './hidden/hiddenSlice';
import { logger } from 'redux-logger';

const middleware = [logger]

export default configureStore({
    reducer: {
        user: userSlice,
        hidden: hiddenSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setCurrentUser']
        }
    }).concat(...middleware), 
})
