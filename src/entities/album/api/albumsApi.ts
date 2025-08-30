import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query<any[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result, error, userId) => [
        { type: "Albums", id: `USER-${userId}` },
      ],
    }),
    getAlbumById: builder.query<any, number>({
      query: (id) => `albums/${id}`,
      providesTags: (result, error, id) => [{ type: "Albums", id }],
    }),
  }),
});

export const {
  useGetAlbumsByUserQuery,
  useGetAlbumByIdQuery,
} = albumsApi;