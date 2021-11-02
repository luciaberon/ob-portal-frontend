import { configureStore, combineReducers } from "@reduxjs/toolkit";
import OffersReducer from "../features/offers/offersSlice";

const reducer = combineReducers({
  offers: OffersReducer
})
  
const store = configureStore({
  reducer:reducer,
  devTools:true
});

export default store;