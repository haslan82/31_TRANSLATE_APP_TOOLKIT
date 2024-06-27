import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";


const initialState = {
    isLoading: false,
    error: null,
    languages: [],

}

const languageSlice = createSlice({
    name:"languages",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getLanguages.pending, (this.state.)=>{
           state.isLoading = true; 
        });
        builder.addCase(getLanguages.rejected, (state)=>{
            state.isLoading=false;
        })
    }
})

export default languageSlice.reducer;
