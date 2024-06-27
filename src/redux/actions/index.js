import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";


// asenkron thunk aksiyonu

export const getLanguages = createAsyncThunk("languages/getLanguages", async ()=>{
    // api isteği atılır
   const res = await api.get("/getLanguages");
  //! console.log(res)

// payload a return edilir
   return res.data.data.languages;
})


export const translateText = createAsyncThunk("translate", async (p)=>{
   //! console.log(p)



   // api ye gönderilecek paremetreleri belirleme
const params = new URLSearchParams();
//! console.log(params)
params.set("source_language", p.sourceLang.value);
params.set("target_language", p.targetLang.value);
params.set("text", p.text);
// ! console.log(params)
// api ye gönderilecek header ı belirledik
 const headers = {
   "content-type": "application/x-www-form-urlencoded",
 };
// api ye isteğini at
 const res = await api.post("/translate", params, {headers});
 //! console.log(res)

 // payload ı belirle
return res.data.data;

});
