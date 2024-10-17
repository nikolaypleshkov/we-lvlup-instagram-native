import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../features/toast/toastSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
