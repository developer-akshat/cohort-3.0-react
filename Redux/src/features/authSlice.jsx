import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated : false
    },
    reducers:{
        addUser: (state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state)=>{
            state.addUser = null;
            state.isAuthenticated = false;
        },
    },
})
export const {addUser,removeUser,} = authSlice.actions;
export default authSlice.reducer;