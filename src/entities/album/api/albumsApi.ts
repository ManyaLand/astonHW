import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query<Album[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (_result, _error, userId) => [{ type: "Albums", id: `USER-${userId}` }],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (id) => `albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Albums", id }],
    }),
  }),
});

export const { useGetAlbumsByUserQuery, useGetAlbumByIdQuery } = albumsApi;