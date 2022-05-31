import React, {useState} from "react"
import { Form, Checkbox } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function SignUpForm({onSignIn}){
    const defaultForm = {    
        username:"",
        email:"",
        password:"",
        password_confirmation:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
          ...formData,
          [key]:value
        })
    }
  
    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        .then(r=>{
            if(r.ok)
                {r.json().then((user)=>{onSignIn(user)
                  navigate("/mylist");
                  setFormData(defaultForm)
                })}
            else
                {r.json().then((e)=>setErrors(e.errors))}
            })
    }
  
    return (
      <div>
        <Form className="Login" onSubmit={handleSubmit}>
          <h3>Create your Tourlog account</h3>
          <Form.Input placeholder="Username" type="text" name="username" value={formData.username} onChange={handleChange}/>
          <Form.Input placeholder="Email" type="text" name="email" value={formData.email} onChange={handleChange}/>
          <Form.Input placeholder="Password" type="text" name="password" value={formData.password} onChange={handleChange}/>
          <Form.Input placeholder="Confirm password" type="text" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}/>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Form.Button content="Submit"/>
        </Form>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    );
}
export default SignUpForm