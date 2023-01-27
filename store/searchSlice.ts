import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'


const searchSlice = createSlice({
    "name": "searchSlice",
    initialState:{
        search: "",
        results: null
    },
    reducers:{
        changeSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload
        },
        changeResults: (state, action: PayloadAction<any>) => {
            state.results = action.payload
        }
    }
})

export default searchSlice.reducer
export const {changeSearch} = searchSlice.actions