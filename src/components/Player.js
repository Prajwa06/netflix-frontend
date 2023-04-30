//AIzaSyB3Brxy0-rvjxxtyqLt-IyPX9sfV7XhnXA

import React from "react";
import { Container } from "@mui/material";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import "./css/player.css";
export default function Player() {
  const navigate = useNavigate();
  return (
    <Container className="player">
      <svg
      
      onClick={()=>navigate("/")}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 exit"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <video src={video} className="video" autoplay loop controls muted>
        {" "}
      </video>
    </Container>
  );
}
