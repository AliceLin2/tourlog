import React, {useState} from "react"
import City from "./City"
import { Grid, Segment, Input } from 'semantic-ui-react'
import {Link, Route, Routes} from "react-router-dom"
import { useRoute } from '@react-navigation/native'
import View from "./View"

function Destination({cities}){
    const route = useRoute()
    console.log(route)
    function cityArray(){
        let city
        if(cities)
            city =(cities.map(c=>{return(
                <Link key={c.id} to={`/cities/${c.id}`}>
                    <City class="city" key={c.id} city={c}/>
                </Link>)}))
        return city
    }

    return (
        <Grid columns={4} divided>
            <Segment>
                <Input action={{ icon: 'search' }} placeholder='Search the destination...'/>
            </Segment>
            <Grid.Row>
                {cityArray()}
            </Grid.Row>
            <Routes>
                <Route path={`:cityId`} element={<View/>} />
            </Routes>
        </Grid>
        )
}

export default Destination