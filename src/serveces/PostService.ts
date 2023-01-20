import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    tagTypes: ['Post'],
    endpoints: (build) => ({


    })
})