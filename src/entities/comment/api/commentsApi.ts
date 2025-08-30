import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getCommentsByPost: builder.query<any[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) => [
        { type: "Comments", id: `POST-${postId}` },
      ],
    }),
  }),
});

export const { useGetCommentsByPostQuery } = commentsApi;