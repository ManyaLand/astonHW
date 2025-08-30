import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPostById: builder.query<any, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
    getPostsByUser: builder.query<any[], number>({
      query: (userId) => `users/${userId}/posts`,
      providesTags: (result, error, userId) => [
        { type: "Posts", id: `USER-${userId}` },
      ],
    }),
    // Не применяется, так как в jsonplaceholder нет возможности добавлять данные, написала как пример
    addPost: builder.mutation<any, Partial<any>>({
        query: (body) => ({
            url: "posts",
            method: "POST",
            body,
        }),
        invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetPostsByUserQuery } =
  postsApi;