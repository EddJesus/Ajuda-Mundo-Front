import {
  getUserPending,
  getUserFail,
  getUserSuccess,
  removeUser,
} from "./User.store";
import { invalidAccessToken, loginSuccess } from "../login/Login.store";
import { UserAPI } from "../../api/user.api";

export const getUserProfile = () => async (dispatch: any) => {
  const userAPI = new UserAPI();

  try {
    dispatch(removeUser());
    dispatch(getUserPending());
    const res = await userAPI.getUser();

    if (res.user) {
      dispatch(loginSuccess());
    }
    dispatch(getUserSuccess(res.user));
  } catch (error) {
    dispatch(invalidAccessToken());
    localStorage.removeItem("access-token");
    dispatch(getUserFail(error));
  }
};
