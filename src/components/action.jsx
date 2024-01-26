import axios from "axios";

export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Simulate API request
      const response = await axios.get(
        "https://648b32c917f1536d65ea936a.mockapi.io/register",
        userData
      );

      // Dispatch success action
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      // Dispatch error action
      dispatch({
        type: "LOGIN_USER_FAILURE",
        payload: error.message,
      });
    }
  };
};

export const register = (userData) => {
  return async (dispatch) => {
    try {
      // Simulate API request
      const response = await axios.post(
        "https://648b32c917f1536d65ea936a.mockapi.io/register",
        userData
      );

      // Dispatch success action
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      // Dispatch error action
      dispatch({
        type: "REGISTER_USER_FAILURE",
        payload: error.message,
      });
    }
  };
};