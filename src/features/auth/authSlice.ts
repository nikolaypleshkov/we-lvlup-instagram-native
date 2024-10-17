import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state: AuthState,
      action: PayloadAction<Omit<AuthState, "isAuthenticated">>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state: AuthState) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
