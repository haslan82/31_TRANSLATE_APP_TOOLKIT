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
        builder.addCase(getLanguages.pending, (state)=> {
           state.isLoading = true; 
        });
        builder.addCase(getLanguages.rejected, (state, action)=>{
            state.isLoading=false;
            state.error= action.error.message;
            console.log(action.error.message)
        })
        builder.addCase(getLanguages.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.error= null;
            //! console.log(action.payload)
            state.languages=action.payload
        })
    }
})

export default languageSlice.reducer;
