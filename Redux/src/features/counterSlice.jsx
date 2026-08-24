import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increament: (state,action)=>{
           state.count++;
        },
        decrement:(state,action)=>{
            state.count--;

        },
        incrementbyValue:(state,action)=>{
            state.count += Number(action.payload) ;
        }
    }
})

export const {incrementbyValue,increament,decrement} = counterSlice.actions;
export default counterSlice.reducer;