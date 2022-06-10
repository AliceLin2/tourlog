import React, {useState, useContext} from "react";
import { Grid, Input, Image } from 'semantic-ui-react'
import {Link, Route, Routes, useLocation} from "react-router-dom"
import View from "./View";
import {ViewContext} from "../context/viewContext"

function ViewList() {
    const location= useLocation()
    const [search, setSearch] = useState("");
    const {views} = useContext(ViewContext)
    const mostPopular = [...views].sort((a,b)=>-a.comments.length+b.comments.length)

    const viewCard = views
        .filter((v) => v.scene.toLowerCase().includes(search.toLowerCase()))
        .map(view=>{
            return(
                <Link className="card" key={view.id} to={`/views/${view.id}`}>
                    <h2>{view.scene}</h2>
                    <Grid>
                        <Grid.Column width={6}>
                            <Image src={view.images[0].url} style={{height:"300px"}}/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <p>{view.overview}</p>
                        </Grid.Column>
                    </Grid>
                </Link>
    )})
    return (
        <div className='viewlist'>
            {location.pathname.length>8?null:
                <Grid>
                    <Input 
                        action={{icon: 'search'}} 
                        placeholder='Search the view...' 
                        onChange={e=>setSearch(e.target.value)} 
                        value={search} 
                        style={{left: "30%",width: "600px"}}
                    />
                    <Grid.Column width={12}>
                        {viewCard}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <div className="card">
                            <h3>Popular Views</h3>
                            <Link to={`/views/${mostPopular[0].id}`}><Image src={mostPopular[0].images[0].url} style={{height:"100px"}}/></Link><br/>
                            <Link to={`/views/${mostPopular[1].id}`}><Image src={mostPopular[1].images[0].url} style={{height:"100px"}}/></Link><br/>
                            <Link to={`/views/${mostPopular[2].id}`}><Image src={mostPopular[2].images[0].url} style={{height:"100px"}}/></Link>
                        </div>
                    </Grid.Column>
                </Grid>
            }
            <Routes>
                <Route path={`:viewId`} element={<View/>} />
            </Routes>
        </div>
)
}

export default ViewList