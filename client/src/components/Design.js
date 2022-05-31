import React, {useState} from "react"
import { Form, Dropdown, Button } from 'semantic-ui-react'
import { useAlert } from 'react-alert'

function Design({styles, seasons}){
    const alert = useAlert()
    const [cityImage, setCityImage]=useState(null)
    const [ticket, setTicket]=useState("")
    const [hour, setHour]=useState("")
    const [overview, setOverview]=useState("")
    const [scene, setScene]=useState("")
    const [viewImage, setViewImage]=useState(null)
    const [name, setName]=useState("")
    const [country, setCountry]=useState("")
    const [area, setArea]=useState("")

    const [city, setCity]=useState(null)
    const [style, setStyle]=useState(null)
    const [bestMonth, setBestMonth]=useState(null)

    console.log(city)
    
    function submitCity(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',name)
        formData.append('country',country)
        formData.append('area',area)
        formData.append('symbol_image',cityImage)

        fetch('/cities',{
          method:"POST",
          body:formData
        })
        .then(r=>r.json())
        .then(data=>{
          setCity(data)
          setName("")
          setCountry("")
          setArea("")
          setCityImage(null)
        })
        .catch(e=>alert.show(e))
    }

    function handleStyle(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('city_id',parseInt(city.id))
        formData.append('style_id',parseInt(style))

        fetch('/style_cities',{
          method:"POST",
          body:formData
        })
        .then(r=>r.json())
        .then(data=>{
          console.log(data)
        })
        .catch(e=>alert.show(e))
    }

    function handleBestMonth(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('city_id',parseInt(city.id))
        formData.append('season_id',parseInt(bestMonth))

        fetch('/season_cities',{
          method:"POST",
          body:formData
        })
        .then(r=>r.json())
        .then(data=>{
          console.log(data)
        })
        .catch(e=>alert.show(e))
    }

    function submitView(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('ticket',parseInt(ticket))
        formData.append('hour',hour)
        formData.append('overview',overview)
        formData.append('scene',scene)
        formData.append('image',viewImage)
        formData.append('city_id',parseInt(city.id))

        fetch('/views',{
          method:"POST",
          body:formData
        })
        .then(r=>r.json())
        .then(data=>{
          setTicket("")
          setHour("")
          setOverview("")
          setScene("")
          setViewImage(null)
        })
        .catch(e=>alert.show(e))
    }
  
    return (
      <div>
        <label>Add City</label>
        <Form className="Login" onSubmit={submitCity}>
          <Form.Input placeholder="name" type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/>
          <Form.Input placeholder="country" type="text" name="country" value={country} onChange={e=>setCountry(e.target.value)}/>
          <Form.Input placeholder="area" type="text" name="area" value={area} onChange={e=>setArea(e.target.value)}/>
          <Form.Input type="file" accept="image/*" multiple={false} onChange={e=>setCityImage(e.target.files[0])}/>
          <Form.Button content="Submit"/>
        </Form>
        <br></br>
        <Form className="Login" onSubmit={handleStyle}>
          <Dropdown
            className='icon'
            fluid
            clearable
            selection
            icon='angle down'
            options={styles}
            placeholder='Select A City Style'
            onChange={e=>setStyle(e.target.parentElement.id)}
          />
          <br></br>
          <Button>Set Style</Button>
        </Form>
        <br></br>
        <Form className="Login" onSubmit={handleBestMonth}>
          <Dropdown
            className='icon'
            fluid
            clearable
            selection
            icon='angle down'
            options={seasons}
            placeholder='Select Best Month to Visit'
            onChange={e=>setBestMonth(e.target.parentElement.id)}
          />
          <br></br>
          <Button>Set best month to visit</Button>
        </Form>
        <br></br>
        <label>Add View</label>
        <Form className="Login" onSubmit={submitView}>
          <Form.Input placeholder="ticket" type="integer" name="ticket" value={ticket} onChange={e=>setTicket(e.target.value)}/>
          <Form.Input placeholder="hour" type="text" name="hour" value={hour} onChange={e=>setHour(e.target.value)}/>
          <Form.Input placeholder="overview" type="text" name="overview" value={overview} onChange={e=>setOverview(e.target.value)}/>
          <Form.Input placeholder="scene" type="text" name="scene" value={scene} onChange={e=>setScene(e.target.value)}/>
          <Form.Input type="file" accept="image/*" multiple={false} onChange={e=>setViewImage(e.target.files[0])}/>
          <Form.Button content="Submit"/>
        </Form>
      </div>
    );
}
export default Design