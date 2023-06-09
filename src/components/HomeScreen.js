import React from 'react'
import './css/homeScreen.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import requests from '../requests'

export default function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Navbar/>
      <Banner/>
      {/* netflix originals */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />



<Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />

<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
      
    </div>
  )
}
