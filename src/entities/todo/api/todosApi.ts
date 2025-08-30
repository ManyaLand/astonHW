import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (_result, _error, userId) => [{ type: "Todos", id: `USER-${userId}` }],
    }),
  }),
});

export const { useGetTodosByUserQuery } = todosApi;