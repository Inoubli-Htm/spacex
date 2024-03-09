import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./features/ProfileSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileSlice,
  },
});
