import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice"
import purchases from "./slices/Purchases.slice"
export default configureStore ({
    reducer: {
        products,
        purchases
        
    }
})