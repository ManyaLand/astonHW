import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
  selectId: (post: any) => post.id,
});

const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts: postsAdapter.setAll,
  },
});

export const { setPosts } = postSlice.actions;
export const postSelectors = postsAdapter.getSelectors((state: any) => state.posts);

export default postSlice.reducer;