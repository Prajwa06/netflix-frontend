import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';
import Player from './components/Player';
import WatchList from './components/WatchList';


function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email:user.email
        }));
        // ...
      } else {
        dispatch(logout());
      }
    });
  },[dispatch])
  return (
    <div className="App">
    {!user ? (
      <Routes>
        <Route path="/" element={ <Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
   ):
    ( <Routes>
      <Route path="/" element={ <HomeScreen/>} />
      <Route path="/profile" element={<ProfileScreen/>}/>
      <Route path="/player" element={<Player/>}/>
      <Route path="/watchlist" element={<WatchList/>}/>
    </Routes>)}
   
    
    </div>
  );
}

export default App;
