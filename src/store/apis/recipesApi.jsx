import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mealgenie-api.up.railway.app/",
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchRecipes: builder.query({
        query: () => {
          return {
            url: "/fetch-recipes",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchRecipesQuery } = recipesApi;
export { recipesApi };
