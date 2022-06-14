import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    isAuth: !!localStorage.getItem("access-token"),
    error: "",
  },
  reducers: {
    invalidAccessToken: (state: any) => {
      state.error = "";
      state.isAuth = false;
    },
    loginPending: (state: any) => {
      state.error = "";
      state.isLoading = true;
    },
    loginSuccess: (state: any) => {
      state.error = "";
      state.isLoading = false;
      state.isAuth = true;
    },
    loginFail: (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = login;

export const { loginFail, loginPending, loginSuccess, invalidAccessToken } =
  actions;

export default reducer;
