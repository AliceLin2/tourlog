import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Segment, Button } from 'semantic-ui-react'
import background from "../images/Oia.jpeg"
import {UserContext} from "../context/userContext"

function NavBar() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)
  const userLogin = (user) => {
      if(user)
        return user.is_admin
      else
        return null}

  const format = ({ isActive }) => ({
    display: 'inline-block',
    width: '200px',
    padding: '10px',
    margin: '0 10px 10px',
    fontSize: '20px',
    borderRadius: '5px',
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? 'orange' : '#f8d9b4',
  })

  function handleLogout(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then((r)=>{
      if(r.ok){
        setUser(null)
        navigate("/");
      }
    })
  }
  return (
    <Segment.Group horizontal  style={{backgroundImage: `url(${background})`}}>
        <Segment floated='left'>
          <h1 style={{color: "orange"}}>Tourlog</h1>
        </Segment>
        <Segment floated='left'>
            <NavLink to="/" style={format}>
                Home
            </NavLink>
            <NavLink to="/cities" style={format}>
                Destination
            </NavLink>
            <NavLink to="/views" style={format}>
                Views
            </NavLink>
            {userLogin(user)?
                <NavLink to="/design" style={format}>
                    Design
                </NavLink>:null}
        </Segment>
        <Segment floated='right'>
            <NavLink to="/login" style={format}>
                {user?`Hi! ${user.username}`:"Login|Sign up"}
            </NavLink>
            <Button onClick={handleLogout} content='Logout'/>
        </Segment>
    </Segment.Group>
  );
}

export default NavBar;