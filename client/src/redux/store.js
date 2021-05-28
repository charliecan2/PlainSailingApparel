import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './user/userSlice';
import { logger } from 'redux-logger';

const middleware = [logger]

export default configureStore({
    reducer: {
        user: userSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setCurrentUser']
        }
    }).concat(...middleware), 
})
