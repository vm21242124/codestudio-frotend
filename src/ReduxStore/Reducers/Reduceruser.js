import { createReducer } from "@reduxjs/toolkit";
const intialstate={
    user:null,
    language:"java"
}

export const userReducer=createReducer(intialstate,{

    setuser:(state,action)=>{
        
        state.user=action.payload;
    },
    removeuser:(state)=>{
        state.user=null;
    },
    setlangauge:(state,action)=>{
        state.language=action.payload;
    }
});