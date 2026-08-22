import { UserActionTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user) => (dispatch) => {
  axios
    .post("api/v1/user/register", user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// Login - Get User Token
export const loginUser = (user, history) => (dispatch) => {
  axios
    .post(`/api/v1/user/login`, user)
    .then((res) => {
      const { token, user } = res.data;

      localStorage.setItem("jwtToken", token);

      dispatch(setCurrentUser(user));
      history.push("/shop");
    })
    .catch((err) => console.log(err.response.data)); // changed only this
};

// set logged in user
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

// set logged out user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser(null));
};