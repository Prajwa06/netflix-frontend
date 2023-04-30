import React, { useEffect, useState } from "react";
import "./css/navbar.css";
import { Avatar } from "@mui/material";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  });
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
    navigate("/");
  };

  return (
    <div className={`navbar ${show && "nav__black"}`}>
    <div className="left">
    <Avatar onClick={()=>navigate("/profile")} className="avatar" />
    <svg onClick={handleLogout}  
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 logout"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
      <div className="navbar__contents">
      
        <img
          onClick={()=>navigate("/")}  
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </div>
     
    </div>
  );
}
