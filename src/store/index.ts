import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login/Login.store";
import userReducer from "./user/User.store";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
