import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/Reduceruser";

const store =configureStore({
    reducer:{
        user:userReducer,
    }
});
export default store;