import React from "react";
import axios from "../axios.js";
import { auth, provider } from "../firebase.js";
import { useStateValue } from "../stateProvider.js";
import { actionTypes } from "../reducer";

function Signup() {
  const [{}, dispatch] = useStateValue();

  const sign = async () => {
    auth
      .signInWithPopup(provider)
      .then(async result => {
        console.log(result);
        console.log(result.additionalUserInfo.isNewUser);
        console.log(result.user.displayName);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });

        if (result.additionalUserInfo.isNewUser) {
          axios.post("/users", {
            name: result.user.displayName,
            userEmail: result.user.email
          });
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <button onClick={sign}>sign in</button>
    </div>
  );
}

export default Signup;
