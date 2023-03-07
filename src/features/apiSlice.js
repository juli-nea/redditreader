import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.reddit.com/',
      responseHandler: async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.response = response;
          error.data = data;
          throw error;
        }
        return data;
      },
    }),
    endpoints: ({ query }) => ({
      getAllProducts: query({
        query: () => "r/popular.json",
      }),
      getProduct: query({
        query: (product) => `r/popular.json`,
      }),
    }),
  });
  
  export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
  
  
