import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/axiosService';


export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
      await authService.login(data);
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
    reducers: {
        checkLogged: (state) => {
            if (localStorage.getItem('user')) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
        }
    },
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
export const { checkLogged } = slice.actions;
