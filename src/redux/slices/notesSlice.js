import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
};

const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    NsignIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    NsignOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { NsignIn, NsignOut } = notesSlice.actions;
export default notesSlice.reducer;
