import { configureStore } from "@reduxjs/toolkit";


const middleware = [
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];
  
  // AUTH STATE
const authState = {
  token: "",
};
  
function authReducer(state = authState, action) {
  // DO STUFF
  return state;
}
  
const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware,
});