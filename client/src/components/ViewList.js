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
    console.log(mostPopular.length<=1)
    const viewCard = ()=>{
        if(views.length===0)
            return null
        else
            return views
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
    )})}

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
                        {viewCard()}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <div className="card">
                            <h3>Popular Views</h3>
                            <div><Image src={mostPopular.length===0?null:mostPopular[0].images[0].url} style={{height:"100px"}}/></div><br/>
                            <div><Image src={mostPopular.length<=1?null:mostPopular[1].images[0].url} style={{height:"100px"}}/></div><br/>
                            <div><Image src={mostPopular.length<=2?null:mostPopular[2].images[0].url} style={{height:"100px"}}/></div>
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