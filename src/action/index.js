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



