import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: {
      userId: 0,
      name: "",
      email: "",
      password: "",
      profileImg: null,
      pointsScore: null,
      activitiesIds: null,
      createdAt: "",
      updatedAt: "",
    },
    isLoading: false,
    error: "",
  },
  reducers: {
    removeUser: (state: any) => {
      state.user = {
        userId: 0,
        name: "",
        email: "",
        password: "",
        profileImg: null,
        pointsScore: null,
        activitiesIds: null,
        createdAt: "",
        updatedAt: "",
      };
    },
    getUserPending: (state: any) => {
      state.isLoading = true;
    },
    getUserSuccess: (state: any, { payload }: any) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = user;

export const { getUserPending, getUserSuccess, getUserFail, removeUser } =
  actions;

export default reducer;
