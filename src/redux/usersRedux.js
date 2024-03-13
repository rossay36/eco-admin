import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL USERS
    usersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    usersSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    usersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE A USER
    deleteUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.user.splice(
        state.user.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE A USER
    updateUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.user[state.user.findIndex((item) => item._id === action.payload)] =
        action.payload.user;
    },
    updateUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD USER
    addUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.user.push(action.payload);
    },
    addUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  usersStart,
  usersSuccess,
  usersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  deleteUsersFailure,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
  addUsersStart,
  addUsersSuccess,
  addUsersFailure,
} = usersSlice.actions;
export default usersSlice.reducer;
