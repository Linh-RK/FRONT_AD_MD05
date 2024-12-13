import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../../services/authService";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "idle",
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(login.fulfilled, (state, action) => {

                state.status = "successfully";
                state.data = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            
    }

})

export default authSlice.reducer;