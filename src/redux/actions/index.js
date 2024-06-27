import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";


// asenkron thunk aksiyonu

export const getLanguages = createAsyncThunk("languages/getLanguages", async ()=>{
    // api isteği atılır
   const res = await api.get("/getLanguages");
   console.log(res)

// payload a return edilir
   return res.data.data.languages;
})