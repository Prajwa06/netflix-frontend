import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import "./css/WatchList.css";
export default function WatchList() {
  const user = useSelector(selectUser);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("https://netflix-backend-six.vercel.app/list", {
        email: user.email,
      });
      if (res.data.success) {
        setMovies(res.data.list);
       
      }
    };
    fetchMovies();
    setCount(10);
  }, [count]);

  const handleDelete=async(e,movie)=>{
    e.preventDefault();
        const res=await axios.post("https://netflix-backend-six.vercel.app/delete",{
            movie
        });
        if(res.data.success){
                setMovies([...movies.filter((m) => m._id !== movie._id)]);
              };
        }

  return (
    <div>
      <Navbar />
      <h1 className="title">Your WatchList..!</h1>
      {movies.length===0 && <h1 className="emptylist">List is Empty. Please add Movies..!</h1>}
      <div className="list">
        {movies.map((m) => (
          <div className="watchList__movie">
            <img
              src={`https://image.tmdb.org/t/p/original/${m.movie.backdrop_path}`}
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 delete"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={(e)=>handleDelete(e,m)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <div>
              <h1>{m.movie.original_title}</h1>
              <p>{m.movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
