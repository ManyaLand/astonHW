import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodosByUser: builder.query<any[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, userId) => [
        { type: "Todos", id: `USER-${userId}` },
      ],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserQuery } = todosApi;