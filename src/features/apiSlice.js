import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const redditApi = createApi({
    reducerPath: "redditApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://www.reddit.com/"}),
    endpoints: (builder) => ({
        getChiari: builder.query({
            query: () => "r/chiari/.json"
        })
    })
})

export const { useGetChiariQuery } = redditApi;