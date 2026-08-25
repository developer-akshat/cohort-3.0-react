import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        username : null,
        isAuthenticated : false,
        isLoading: true,
    },
    reducers: {
        addUser: (state,action)=>{
             state.username = action.payload,
             state.isAuthenticated = true,
             state.isLoading = false
        },
        removeUser:(state)=>{
           state.username = null,
           state.isAuthenticated = false,
           state.isLoading = false
        }
    }
})

export const {addUser,removeUser} = authSlice.actions;
export default authSlice.reducer;