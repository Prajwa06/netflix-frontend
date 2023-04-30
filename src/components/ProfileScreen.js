import React from "react";
import "./css/profileScreen.css";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import PlansScreen from "./PlansScreen";
export default function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="profileScreen">
      <Navbar />
     
      <div className="profileScreen__body">
      <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_avatar_logo"
          />
            <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
          <PlansScreen/>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
}
