import React, { useState } from "react";
import "./css/signIn.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate=useNavigate("/");
    const dispatch=useDispatch();


 // new user registration
  const registerNow =async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(login({
        email:user.email
    }));
    navigate("/");
  })
  .catch((error) => {
    console.log(error);
   
  });
  };


  // sign in function
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(login({
        email:user.email
    }));
    navigate("/");
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
  };

  return (
    <div className="signIn">
      <div className="signInScreen__background">
        <img
          className="signInScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="signInScreen__button">Sign In</button>
        <div className="signInScreen__gradient" />
      </div>
      <div className="signInScreen__body">
        <form action="" className="signInForm">
          <h1>Sign In</h1>
          <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="email" />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder="password" />
          <button onClick={signIn} type="submit">
            Sign IN
          </button>
          <h4>
            New to NetFlix? <span onClick={registerNow}>Sign Up now.</span>
          </h4>
        </form>
      </div>
    </div>
  );
}
