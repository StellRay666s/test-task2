import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    isOpen: false,
    message: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.data = action.payload;
    },
    hiddenNotification(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setNotification, hiddenNotification } = userSlice.actions;

export default userSlice.reducer;
