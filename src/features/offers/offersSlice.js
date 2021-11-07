import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { getAllOffers, getOfferByID } from '../../services/axiosService';

// EXPLICAR PARA QUÉ ES CADA CONST
export const retrieveOffers = createAsyncThunk(
  "offers/retrieve",
  async () => {
    const res = await getAllOffers();
    return res.data;
  }
);

export const retrieveOfferById = createAsyncThunk(
  "offers/retrieveById",
  async (id) => {
    const res = await getOfferByID(id)
    return res.data;    
}
);

const initialState = {
  offers: [],
  isLoading: false,
  offer:{}
}

// Slice
const slice = createSlice({
    name: 'offers',
    initialState,
    extraReducers: {
        [retrieveOffers.fulfilled]: (state, action) => {
          return {
            ...state,
            isLoading: false,
            offers: action.payload
          }
        },
        [retrieveOfferById.fulfilled]: (state, action) => {
          console.log("PAYLOAD",action.payload)
          return {
            ...state,
            isLoading:false,
            offer:action.payload
          };
        },     
        [retrieveOfferById.pending]: (state) => {
          return {
            ...state,
            isLoading:true
          }
        },
        [retrieveOffers.pending]: (state) => {
          return {
            ...state,
            isLoading: true
          }
        }
    }
});

const { reducer } = slice;
export default reducer;


