import React, { useEffect, useState } from 'react'
import "./css/banner.css"
import requests from '../requests';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';


export default function Banner() {
  const navigate=useNavigate();
  function truncate(string, n){
      return string?.length > n ? string.substring(0,n-1)+'...':string;
  }

  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const request=await axios.get(requests.fetchTrending);
      setMovie(request.data.results[
        Math.floor(Math.random()*request.data.results.length-1)
      ])
      return request;
    }

    fetchData();
  },[])


  return (
    <header className='banner' style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
    }} >
      <div className='banner__contents'>
          <h1 className="banner__title">{movie?.title|| movie?.name||movie?.original_name
}</h1>
          <div className="banner__buttons">
            <button onClick={()=>navigate("/player")} className='banner__button'>Play</button>
            <button onClick={()=>navigate("/watchlist")} className='banner__button'>My List</button>
          </div>
          <h1 className='banner__description'>
            {truncate(
              movie?.overview, 150
            )}
          </h1>
      </div>
      <div className='banner__fadeBottom'>
      </div>
    </header>
  )
}
