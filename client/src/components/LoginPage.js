import React, {useState} from "react"
import SigninForm from "./SigninForm"
import SignupForm from "./SignupForm"
import background from "../images/island.jpeg"
import { Button } from 'semantic-ui-react'

const style = {
  display: "inline-block",
  width: "300px",
  padding: "20px",
  margin: "0 10px 10px",
  color: "black",
  fontSize: "20px",
  position: 'absolute',
  left: "40%",
  top: "20%",
  backgroundImage: `url(${background})`
};

function LoginPage(){
  const [hasAccount, setHasAccount] = useState(true)

  return (
      hasAccount ? (
          <div  style={style}>
              <SigninForm/>
              <h4>New to Tourlog?</h4>
              <Button onClick={()=>setHasAccount(false)} content='Join now!'/>
          </div>
          ): (
          <div style={style}>
              <SignupForm/>
              <h4>Already have an account?</h4>
              <Button onClick={()=>setHasAccount(true)} content='Log in'/>
          </div>  
          )
  )
}
export default LoginPage