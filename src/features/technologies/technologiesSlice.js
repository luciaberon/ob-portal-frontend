import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { getTechnologies } from '../../services/axiosService';

// EXPLICAR PARA QUE ES CADA CONST
export const retrieveTechnologies = createAsyncThunk(
  "technologies/retrieve",
  async () => {
    const res = await getTechnologies();
    return res.data;
  }
);

const initialState = [];

// Slice

const slice = createSlice({
    name: 'technologies',
    initialState,
    extraReducers: {
        [retrieveTechnologies.fulfilled]: (state, action) => {
          return [...state,action.payload]
        },
    }
});

const { reducer } = slice;
export default reducer;


