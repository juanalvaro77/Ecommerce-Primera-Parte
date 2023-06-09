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
        .then(resp => dispatch(setPurchases(resp.data)))
        .catch(error => console.error(error))
}

export const createPurchaseThunk = data => dispatch=> {
    axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
        .then(() => dispatch(getPurchasesThunk()))
        .catch(error =>console.error(error))
}

export const cartCheckoutThunk = () => dispatch=> {
    axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {}, getConfig())
        .then(() => {
            dispatch(getPurchasesThunk()),
            alert("Esta siendo redirigido a su banco")
        })
        .catch(error =>console.error(error))
}

export const purchasesThunk = () => dispatch => {
    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
        .then((resp) => console.log(resp.data))
        .catch(error =>console.error(error))
}

export const deleteProductFromCartThunk = (data) => dispatch => {
    axios
        .delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${data}`, getConfig())
        .then((resp) => dispatch(getPurchasesThunk()))
        .catch(error =>console.error(error))
}

export const {setPurchases} = PurchasesSlice.actions;
export default PurchasesSlice.reducer;