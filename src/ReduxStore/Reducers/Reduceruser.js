import { createReducer } from "@reduxjs/toolkit";
const intialstate={
    user:null
}

export const userReducer=createReducer(intialstate,{

    setuser:(state,action)=>{
        // state.user="vinod" 
        state.user=action.payload;
    },
    removeuser:(state)=>{
        state.user=null;
    }
});