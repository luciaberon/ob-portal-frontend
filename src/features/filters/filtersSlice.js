import { createSlice } from '@reduxjs/toolkit'

// Slice
const initialState = [];

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      addFilter: (state,action) => {
        return [...state,action.payload]
      },
      removeFilter: (state,action) => {
        if (state.length === 1) {
          return []        
        }
        const arr = state.filter(item => item !== action.payload)
        return arr;        
      },
      resetFilter: () => {
        return []
      }
    }, 
});

const { reducer } = slice;
export const { addFilter, removeFilter, resetFilter } = slice.actions;
export default reducer;


