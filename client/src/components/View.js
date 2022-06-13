import React, {useContext} from "react"
import { useParams } from 'react-router-dom'
import { Image, Item, Grid} from 'semantic-ui-react'
import ViewComment from "./ViewComment"
import {ViewContext} from "../context/viewContext"

function View(){
    let id = useParams()
    const {views} = useContext(ViewContext)
    const view = views.filter(v=>v.id===parseInt(id.viewId))

    const viewComponent = view.map(v=>{
                return(
                    <Item key={v.id}>
                        <Item.Content>
                            <h1>{v.scene}</h1>
                            <Item.Meta>
                                <div className='rowC'>
                                    {v.images.map(i=><Image style={{marginRight: '1.2em', marginBottom: '1.2em', width: '600px', height: '400px'}} src={i.url} key={i.id}/>)}
                                </div>
                                <p>Overview: {v.overview} </p>
                                <p>Ticket: {v.ticket}</p>
                                <p>Hour: {v.hour}</p>
                            </Item.Meta>
                        </Item.Content>
                    </Item>)})

    return (
        <Grid>
            <Grid.Row>
                {viewComponent}
            </Grid.Row>
            <Grid.Row>
                <ViewComment view={view}/>
            </Grid.Row>
        </Grid>
    )
}

export default View