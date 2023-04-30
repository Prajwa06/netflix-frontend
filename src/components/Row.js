import React, { useEffect, useState } from "react";
import "./css/row.css";
import axios from "../axios";
import axis from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
export default function Row(props) {
  const { title, fetchUrl } = props;
  const [movies, setMovies] = useState([]);
  const user=useSelector(selectUser);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fetchdata();
  }, [fetchUrl]);

  const addToWaitchList=async(movie)=>{
    const res=await axis.post("https://netflix-backend-six.vercel.app/add", {
        email:user.email,
        movie
    });
    alert(`${movie?.title|| movie?.name||movie?.original_name} added to WatchList`);
  }
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          
         
            <img
            onClick={()=>addToWaitchList(movie)}
              className="row__poster"
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
       
        ))}
      </div>
    </div>
  );
}
