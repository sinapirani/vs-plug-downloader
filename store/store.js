import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "./searchSlice"


export const store = configureStore({
    reducer:{
        searchSlice
    }
})
