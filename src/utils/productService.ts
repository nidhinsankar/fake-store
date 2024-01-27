import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './constants'

const fakeStoreApi = createApi({
    reducerPath:'fakeStoreApi',
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints:(builder) => ({
        getAllProducts:builder.query({
            query:()=> `products`
        })
    })
})

export default fakeStoreApi

export const { useGetAllProductsQuery } = fakeStoreApi