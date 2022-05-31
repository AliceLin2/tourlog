import React, {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import Destination from './Destination';
import Home from './Home';
import SignInForm from './SigninForm';
import SignUpForm from './SignupForm';
import Design from './Design';
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  const [cities, setCities] = useState(null)
  const [styles, setStyles] = useState(null)
  const [seasons, setSeasons] = useState(null)

  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){r.json().then((user)=>setUser(user))}
    })
  }, [])

  useEffect(()=>{
    fetch("/cities")
    .then((r)=>{
      if(r.ok){r.json().then((cities)=>setCities(cities))}
    })
  }, [])
  
  useEffect(()=>{
    fetch("/styles")
    .then((r)=>{
      if(r.ok){r.json().then((styles)=>setStyles(styles))}
    })
  }, [])

  useEffect(()=>{
    fetch("/seasons")
    .then((r)=>{
      if(r.ok){r.json().then((seasons)=>setSeasons(seasons))}
    })
  }, [])

  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/cities/*" element={<Destination cities={cities}/>}/>
            <Route path="/blogs" element={<SignUpForm />}/>
            <Route path="/design" element={<Design seasons={seasons} styles={styles}/>}/>
            <Route path="/login" element={user?<h1>Welcome! {user.username}</h1>:<SignInForm />}/>
            <Route path="/" element={ <Home cities={cities} styles={styles} seasons={seasons}/>}/>
        </Routes>
    </div>
  );
}

export default App;
