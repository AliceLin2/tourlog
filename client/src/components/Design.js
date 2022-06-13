import React, {useState, useContext} from "react"
import { Form, Dropdown} from 'semantic-ui-react'
import { useAlert } from 'react-alert'
import {CityContext} from "../context/cityContext"

function Design(){
    const alert = useAlert()
    const {cities} = useContext(CityContext)
    let options = []
    const temp = cities? cities.forEach(city=>options.push({id: city.id, key: city.name, text: city.name, value: city.name})): null
    const [ticket, setTicket]=useState("")
    const [hour, setHour]=useState("")
    const [overview, setOverview]=useState("")
    const [scene, setScene]=useState("")
    const [images, setImages]=useState([])

    const [city, setCity]=useState(null)

    function submitView(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('ticket',parseInt(ticket))
        formData.append('hour',hour)
        formData.append('overview',overview)
        formData.append('scene',scene)
        formData.append('city_id',parseInt(city))
        
        for (let i = 0; i < images.length; i++) {
          formData.append('images[]', images[i])
        }

        fetch('/views',{
          method:"POST",
          body:formData
        })
        .then(r=>r.json())
        .then((data)=>{
          console.log(data)
          
        })
        .catch(e=>alert.show(e))
    }
  
    return (
      <div>
        <label>Add View</label>
        <Form className="Login" onSubmit={submitView}>
          <Dropdown
              className='icon'
              fluid
              clearable
              selection
              icon='angle down'
              options={options}
              placeholder='Choose city to add view'
              onChange={e=>setCity(e.target.parentElement.id)}
          />
          <br></br>
          <Form.Input placeholder="ticket" type="integer" name="ticket" value={ticket} onChange={e=>setTicket(e.target.value)}/>
          <Form.Input placeholder="hour" type="text" name="hour" value={hour} onChange={e=>setHour(e.target.value)}/>
          <Form.Input placeholder="overview" type="text" name="overview" value={overview} onChange={e=>setOverview(e.target.value)}/>
          <Form.Input placeholder="scene" type="text" name="scene" value={scene} onChange={e=>setScene(e.target.value)}/>
          <Form.Input type="file" accept="image/*" multiple onChange={e=>setImages([...images, ...e.target.files])}/>
          <Form.Button content="Submit"/>
        </Form>
      </div>
    );
}
export default Design