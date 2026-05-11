import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state, action)=>{
            return action.payload
        },

        removeUserFromFeed:(state, action)=>{
            let newState = state.filter(p => p._id !== action.payload)
            return newState
        },

        clearFeed:(state,action) => null
    }
})


export const {addFeed, removeUserFromFeed, clearFeed} = feedSlice.actions

export default feedSlice.reducer