import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { getAllOffers, getOfferByID } from '../../services/axiosService';


export const retrieveOffers = createAsyncThunk(
  "offers/retrieve",
  async () => {
    const res = await getAllOffers();
    return res.data;
  }
);

export const retrieveOfferById = createAsyncThunk(
  "offers/findById",
  async (id) => {
    const res = await getOfferByID(id);
    return res.data;
  }
);

const initialState = [];

// Slice

const slice = createSlice({
    name: 'offers',
    initialState,
    extraReducers: {
        [retrieveOffers.fulfilled]: (state, action) => {
          return [
            ...state,
            action.payload
          ]
        },
        [retrieveOfferById.fulfilled]: (state, action) => {
          return [action.payload];
        }
    }
});

const { reducer } = slice;
export default reducer;


