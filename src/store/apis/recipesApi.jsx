import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Recipe from "../../components/Recipe";

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
      addRecipe: builder.mutation({
        invalidatesTags: (result, error, recipe) => {
          return [{ type: "Recipe", id: recipe.id }];
        },
        query: (recipeName) => {
          return {
            url: "/recipes",
            method: "POST",
            body: {
              name: recipeName,
            },
          };
        },
      }),
      fetchRecipes: builder.query({
        providesTags: (result, error, recipe) => {
          if (!error) {
            const tags = result.map((recipe) => {
              return { type: "Recipe", id: recipe.id };
            });
            return tags;
          }
          return [];
        },
        query: () => {
          return {
            url: "/recipes",
            method: "GET",
          };
        },
      }),
      editRecipe: builder.mutation({
        invalidatesTags: (result, error, recipe) => {
          return [{ type: "Recipe", id: recipe.id }];
        },
        query: ({ id, name }) => {
          return {
            url: `/recipes`,
            method: "PUT",
            body: {
              id,
              name,
            },
          };
        },
      }),
      deleteRecipe: builder.mutation({
        invalidatesTags: (result, error, recipe) => {
          return [{ type: "Recipe", id: recipe.id }];
        },
        query: (recipe) => {
          return {
            url: `/recipes/${recipe.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddRecipeMutation,
  useFetchRecipesQuery,
  useEditRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
export { recipesApi };
