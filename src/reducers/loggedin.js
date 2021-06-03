
const isloggedReducer = (state = null, action) => {
switch (action.type) {
  case "loggedin":
    return state, action.token;
  default:
    return state;
}
};

export default isloggedReducer;