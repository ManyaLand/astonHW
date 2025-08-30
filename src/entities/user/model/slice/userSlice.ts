import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user: any) => user.id,
});

const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: usersAdapter.setAll,
  },
});

export const { setUsers } = userSlice.actions;
export const userSelectors = usersAdapter.getSelectors((state: any) => state.users);

export default userSlice.reducer;