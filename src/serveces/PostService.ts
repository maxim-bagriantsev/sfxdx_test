import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({


    })
})