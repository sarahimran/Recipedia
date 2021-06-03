const SetInfoReducer = (state = null, action) => {
  switch (action.type) {
    case "setUserInfo":  
    return state,action.profile;
    default:
      return state;
  } 
};

export default SetInfoReducer;
