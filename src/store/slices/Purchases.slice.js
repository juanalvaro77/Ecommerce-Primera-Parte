import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import getConfig from "../../helpers/getConfig";

export const PurchasesSlice = createSlice({
    name: "purchases",
    initialState: [],
    reducers: {
        setPurchases : (state,action)=>{
            return action.payload
        }

    }
})

export const getPurchasesThunk =()=>dispatch=>{
    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart",getConfig())
        .then(resp => console.log("🚀 ~ file: Purchases.slice.js:20 ~ getPurchasesThunk ~ resp:", resp.data))
        .catch(error => console.error(error))
}

export const {setPurchases} = PurchasesSlice.actions;
export default PurchasesSlice.reducer;