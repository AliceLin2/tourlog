import React, {useContext} from "react"
import { useParams } from 'react-router-dom'
import { Image, Item } from 'semantic-ui-react'
import {CityContext} from "../context/cityContext"
import {Link, Route, Routes} from "react-router-dom"
import View from "./View"

function CityViews(){
    let id = useParams()
    const {cities} = useContext(CityContext)

    function viewComponent(){
        let result
        if(cities.length>0)(
            result = cities.filter(c=>c.id===parseInt(id.cityId))[0].views.map(v=>{
                return(
                    <Link className="card" key={v.id} to={`/views/${v.id}`}>
                         <Item>
                                <Item.Content>
                                    <Item.Header style={{fontSize: '50px', marginBottom: '1.2em'}}>{v.scene}</Item.Header>
                                    <Item.Description>
                                        <div className='rowC'>
                                            {v.images.map(i=><Image style={{marginRight: '1.2em', marginBottom: '1.2em', width: '400px', height: '300px'}} src={i.url} key={i.id}/>)}
                                        </div>
                                    </Item.Description>
                                    <Item.Meta>{v.overview}</Item.Meta>
                                </Item.Content>
                            </Item>
                        </Link>
                    )}))
                return result}

    return (
        <div>
            <Item.Group>
                {viewComponent()}
            </Item.Group>
            <Routes>
                <Route path={`:viewId`} element={<View/>} />
            </Routes>
        </div>
    )
}

export default CityViews