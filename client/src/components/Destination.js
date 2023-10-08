import React, {useState, useContext} from "react"
import City from "./City"
import { Grid, Input } from 'semantic-ui-react'
import {Link, Route, Routes, useLocation} from "react-router-dom"
import CityViews from "./CityViews"
import {CityContext} from "../context/cityContext"

function Destination(){
    const location= useLocation()
    const {cities} = useContext(CityContext)
    const [search, setSearch] = useState("");
    const displayCities = cities.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))

    const cityArray = displayCities.map(c=>{return(
                <Link key={c.id} to={`/cities/${c.id}`}>
                    <City class="city" key={c.id} city={c}/>
                </Link>)})

    return (
        <Grid columns={4} divided style={{padding: "50px"}}>
            {location.pathname.length>8?null:<Input action={{icon: 'search'}} placeholder='Search the destination...' onChange={e=>setSearch(e.target.value)} value={search} style={{left: "30%",width: "800px"}}/>}
            <Grid.Row>
                {location.pathname.length>8?null:cityArray}
            </Grid.Row>
            <Routes>
                <Route path={`:cityId/*`} element={<CityViews/>} />
            </Routes>
        </Grid>
        )
}

export default Destination