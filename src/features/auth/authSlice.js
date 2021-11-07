import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/axiosService';


export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
      authService.login(data);
    }
  );

export const logout  = createAsyncThunk(
    "auth/logout",
    async () => {
      authService.logout();
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data) => {
      authService.register(data);
    }
);

let initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled]: (state) => {
            state.isLoggedIn = true;
        },
        [logout.fulfilled]: (state) => {
            state.isLoggedIn = false;
        },
        [register.fulfilled]: (state) => {
            state.isLoggedIn = false;
        }
    }
});

const { reducer } = slice;
export default reducer;


