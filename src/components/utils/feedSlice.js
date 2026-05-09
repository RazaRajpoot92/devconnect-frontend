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
        }
    }
})


export const {addFeed, removeUserFromFeed} = feedSlice.actions

export default feedSlice.reducer