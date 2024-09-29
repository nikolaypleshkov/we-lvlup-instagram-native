import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToastType = "success" | "error" | "info" | "warning" | null;
interface ToastState {
  type: ToastType;
  message: string;
}

const initialState: ToastState = {
  type: null,
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state: ToastState, action: PayloadAction<ToastState>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideToast: (state) => {
      state.type = null;
      state.message = "";
    },
  },
});


export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;