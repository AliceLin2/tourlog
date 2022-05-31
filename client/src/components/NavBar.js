import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Segment } from 'semantic-ui-react'

const format = {
  display: "inline-block",
  width: "200px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "blue",
  color: "white",
  fontSize: "20px"
};

function NavBar({setUser, user}) {
  const navigate = useNavigate();

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
    <Segment.Group horizontal>
        <Segment floated='left'>
          <h1>Tourlog</h1>
        </Segment>
        <Segment floated='left'>
            <NavLink
                to="/"
                style={format}
                activeStyle={{
                background: "pink",
                color: "black"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/cities"
                style={format}
                activeStyle={{
                background: "pink",
                color: "black"
                }}
            >
                Destination
            </NavLink>
            <NavLink
                to="/blogs"
                style={format}
                activeStyle={{
                background: "pink",
                color: "black"
                }}
            >
                Blogs
            </NavLink>
            <NavLink
                to="/design"
                style={format}
                activeStyle={{
                background: "pink",
                color: "black"
                }}
            >
                Design
            </NavLink>
        </Segment>
        <Segment floated='right'>
            <NavLink
                to="/login"
                style={format}
                activeStyle={{
                background: "pink",
                color: "black"
                }}
            >
                {user?`Hi! ${user.username}`:"Login"}
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
        </Segment>
    </Segment.Group>
  );
}

export default NavBar;
