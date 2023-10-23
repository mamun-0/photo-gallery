import { combineReducers } from "redux";

const signInReducer = (isLoggedIn = null, action) => {
  if (action.type === "SIGN_IN") {
    return action.payload;
  }
  return isLoggedIn;
};
const signUpReducer = (isSignUp = null, action) => {
  if (action.type === "SIGN_UP") {
    return action.payload;
  }
  return isSignUp;
};

export default combineReducers({
  storeSignIn: signInReducer,
  storeSignUp: signUpReducer,
});
