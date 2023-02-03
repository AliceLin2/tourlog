import React, {useEffect, useContext} from 'react'
import {Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import Destination from './Destination';
import Home from './Home';
import LoginPage from './LoginPage';
import ViewList from './ViewList';
import Design from './Design';
import './App.css';
import useQuery from "../hooks/useQuery";
import {CommentContext} from "../context/comment"
import {CityContext} from "../context/cityContext"
import {ViewContext} from "../context/viewContext"
import {UserContext} from "../context/userContext"

/*images are from mafengwo.cn; tripadvisor.com and trip.com*/

function App() {
  const {user, setUser} = useContext(UserContext)
  const {setCities} = useContext(CityContext)
  const {setViews} = useContext(ViewContext)
  const {setComments} = useContext(CommentContext)
  const {styles, seasons} = useQuery();

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
    fetch("/views")
    .then((r)=>{
      if(r.ok){r.json().then((views)=>setViews(views))}
    })
  }, [])

  useEffect(()=>{
    fetch("/comments")
    .then((r)=>{
      if(r.ok){r.json().then((comments)=>setComments(comments))}
    })
  }, [])

  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/cities/*" element={<Destination/>}/>
            <Route path="/views/*" element={<ViewList/>}/>
            <Route path="/design" element={<Design/>}/>
            <Route path="/login" element={user?<h1>Welcome! {user.username}</h1>:<LoginPage/>}/>
            <Route path="/" element={ <Home styles={styles} seasons={seasons}/>}/>
        </Routes>
    </div>
  );
}

export default App;