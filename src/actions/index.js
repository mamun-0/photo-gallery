import axios from "axios";
export const signUp = (email, password) => {
  return async function (dispatch) {
    try{
    const { data } = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkS27wDjJ8ghZJR2CIVDs5ZZ-FkVjaWU0",
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    dispatch({
      type: "SIGN_UP",
      payload: data,
    });
  }catch(err){
    console.log(err.message)
  }
}
};
export const signIn = (email, password) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyBkS27wDjJ8ghZJR2CIVDs5ZZ-FkVjaWU0`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      dispatch({
        type: "SIGN_IN",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};