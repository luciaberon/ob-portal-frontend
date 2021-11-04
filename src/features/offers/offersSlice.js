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
  "offers/retrieveById",
  async (id) => {
    const res = await getOfferByID(id)
    return res.data;    
}
);

const initialState = [];

// Slice
const slice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
      filterOffer: (state,action) => {
        let arr = state[0].filter(element => {
            for (let j = 0; j<element.tecnologias.length;j++) {
              if (element.tecnologias[j].nombre === action.payload) {
                return true;
              } 
            }     
            return false;     
        });
        return [arr];
      },
    },
    extraReducers: {
        [retrieveOffers.fulfilled]: (state, action) => {
          return [
            ...state,
            action.payload
          ]
        },
        [retrieveOfferById.fulfilled]: (state, action) => {
          return [action.payload];
        },        
    }
});

const { reducer } = slice;
export const { filterOffer } = slice.actions;
export default reducer;


