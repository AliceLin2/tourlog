import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { Form } from 'semantic-ui-react'
import {UserContext} from "../context/userContext"

function SignInForm(){
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    const defaultForm = {    
        email:"",
        password:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])

    function handleChange(e){
        const key = e.target.name
        setFormData({
          ...formData,
          [key]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        .then(r=>{
            if(r.ok)
                {r.json().then((user)=>{
                  setUser(user)
                  navigate("/");
                  setFormData(defaultForm)
                })}
            else
                {r.json().then((e)=>setErrors(e.errors))}
            })
    }
  
    return (
      <div>
        <Form className="Login" onSubmit={handleSubmit}>
            <h3>Log in to your account</h3>
            <Form.Input placeholder="Email" type="text" name="email" value={formData.email} onChange={handleChange}/>
            <Form.Input placeholder="Password" type="text" name="password" value={formData.password} onChange={handleChange}/>
            <Form.Button content="Submit"/>
        </Form>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    );
}
export default SignInForm