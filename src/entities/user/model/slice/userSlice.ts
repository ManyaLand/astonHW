import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { User } from "../types";
import type { RootState } from "../../../../app/providers/store/types";

const usersAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: usersAdapter.setAll,
  },
});

export const { setUsers } = userSlice.actions;
export const userSelectors = usersAdapter.getSelectors((state: RootState) => state.users);
export default userSlice.reducer;