import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userFromLocalStorage = localStorage.getItem('user');
const initialUser = null;

try {
    if (userFromLocalStorage && userFromLocalStorage !== "undefined") {
        initialUser = JSON.parse(userFromLocalStorage);
    }
} catch (error) {
  // Handle the error (e.g., invalid JSON) if necessary
  console.error('Error parsing user data from localStorage:', error);
}


const initialState = {
    loading: false,
    // currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    currentUser : initialUser,
}

const BASE_URL = 'http://localhost:8886';

export const registerUser = createAsyncThunk('auth/registerUser', async (userObj) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/signup`, userObj);
        
        // console.log(response.data);
        toast.success(response?.data?.msg);
        return response.data;

    } catch (error) {
        toast.error("Registration failed. Please try again.");
        // return thunkAPI.rejectWithValue(error.response.data);
        throw error;
        // console.log(error);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                localStorage.setItem('user', JSON.stringify(action.payload));
                state.loading = false;
                state.currentUser = action.payload;
            })
        
            .addCase(registerUser.rejected, (state,action) => {
                state.loading = false;
                console.error("Registration failed:", action.error);
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;