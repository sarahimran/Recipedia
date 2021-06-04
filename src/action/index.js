export const setUserInfo = (profile) => {
  return {
    type: "setUserInfo",
    profile,
  };
};

export const setloginInfo = (token) => {
  return {
    type: "loggedin",
    token,
  };
};

// export const signout = () => (dispatch) => {
//   dispatch({ type: USER_SIGNOUT });
// };



