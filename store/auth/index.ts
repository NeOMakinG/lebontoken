import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface AuthState {
  isConnected: boolean;
}

const initialState: AuthState = {
  isConnected: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setIsConnected } = authSlice.actions;

export const selectIsConnected = (state: AppState) => state?.auth?.isConnected;

export default authSlice.reducer;
