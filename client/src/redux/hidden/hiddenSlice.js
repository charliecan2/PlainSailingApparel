import { createSlice } from '@reduxjs/toolkit';

export const hiddenSlice = createSlice({
    name: 'hidden',
    initialState: {
        isHidden: true
    },
    reducers: {
        setHidden: (state) => {
            state.isHidden = !state.isHidden
        }
    }
})

export const { setHidden } = hiddenSlice.actions;

export default hiddenSlice.reducer;