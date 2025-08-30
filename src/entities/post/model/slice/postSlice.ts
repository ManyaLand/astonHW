import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { Post } from "../types";
import type { RootState } from "../../../../app/providers/store/types";

const postsAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts: postsAdapter.setAll,
  },
});

export const { setPosts } = postSlice.actions;
export const postSelectors = postsAdapter.getSelectors((state: RootState) => state.posts);
export default postSlice.reducer;