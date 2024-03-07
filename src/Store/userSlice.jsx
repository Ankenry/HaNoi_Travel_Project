import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userName: "",
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
    },
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
