import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

// Slice EXPLICAr***********

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      addFilter: (state,action) => {
            return [...state,action.payload]
      },
    },
});

const { reducer } = slice;
export const { addFilter } = slice.actions;
export default reducer;


