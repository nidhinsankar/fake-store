import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:['apple','ornage'],
        cart:['jim','jim']
    },
    reducers:{
        addProduct:(state,action) => {
            state.products.push(action.payload)
        }
    }
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer