import { configureStore, combineReducers } from "@reduxjs/toolkit";
import OffersReducer from "../features/offers/offersSlice";
import TechnologiesReducer from '../features/technologies/technologiesSlice';
import filtersReducer from '../features/filters/filtersSlice';
import AuthReducer from '../features/auth/authSlice';

// EXPLICAR***********
const reducer = combineReducers({
  offers: OffersReducer,
  auth: AuthReducer,
  technologies: TechnologiesReducer,
  filters: filtersReducer,
})
  
const store = configureStore({
  reducer:reducer,
  devTools:true
});

export default store;