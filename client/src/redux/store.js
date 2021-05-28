import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'

export default configureStore({
    reducer: {
        user: userSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setCurrentUser']
        }
    })
})
