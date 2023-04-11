import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const productsSlice = createSlice({
    name: 'products', //nombre del estado
    initialState: [], //primer valor
    reducers: {
        setProducts : (state, action) => {
            return action.payload;
        }
    }
})

export const getProductsThunk =()=>dispatch=>{
    
    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
        .then(resp => {
            dispatch(setProducts(resp.data))
            
        }
        )
        .catch(error=>console.error(error))
}

export const filterCategoriesThunk = (id) => dispatch =>{
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then(resp=>dispatch(setProducts(resp.data)))
        .catch(error=>console.error(error))
}

export const filterNameThunk = valueInput => dispatch =>{
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${valueInput}`)
        .then(resp=>dispatch(setProducts(resp.data)))
        .catch(error=>console.error(error))
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;