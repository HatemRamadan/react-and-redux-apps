const INIT_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INIT_STATE, action) => {
  console.log(action.type + action.payload);
  switch (action.type) {
    case "SIGN_IN": {
      console.log("in herererererer " + action.payload);
      return { ...state, isSignedIn: true, userId: action.payload };
    }
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
