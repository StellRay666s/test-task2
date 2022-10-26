import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import notificSlice from "./slice/notificSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    notification: notificSlice,
  },
});
