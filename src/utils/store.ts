import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import fakeStoreApi from "./productService";


const store = configureStore({
    reducer:{
        [fakeStoreApi.reducerPath]:fakeStoreApi.reducer,
        product:productsSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(fakeStoreApi.middleware)
    
})
export default store