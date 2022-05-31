import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Form } from 'semantic-ui-react'
import background from "../images/flower.jpeg"

const style = {
  display: "inline-block",
  width: "300px",
  padding: "20px",
  margin: "0 10px 10px",
  background: `url(${background})`,
  color: "white",
  fontSize: "20px",
  position: 'absolute',
  left: "40%",
  top: "20%"
};

function SignInForm({onSignIn}){
    const navigate = useNavigate();
    const defaultForm = {    
        username:"",
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
                  onSignIn(user)
                  navigate("/");
                  setFormData(defaultForm)
                })}
            else
                {r.json().then((e)=>setErrors(e.errors))}
            })
    }
  
    return (
      <div>
        <Form className="Login" onSubmit={handleSubmit} style={style}>
            <h3>Log in to your account</h3>
            <Form.Input placeholder="Username" type="text" name="username" value={formData.username} onChange={handleChange}/>
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