import { createSlice } from '@reduxjs/toolkit';
// utils
// import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: null,
    userName: 'Enter Username',
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        changeName(state, action) {
            state.userName = action.payload
        }

    },
});

// Reducer
export default slice.reducer;

// Actions

export const { startLoading, hasError, changeName } = slice.actions;

// ----------------------------------------------------------------------


