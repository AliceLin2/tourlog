import React from "react"
import {Route, useNavigate, Routes} from "react-router-dom"
import { Image } from 'semantic-ui-react'
import View from './View'

function CityViews({seasons}){
    const navigate = useNavigate();
    navigate("/cities")
    console.log(`cityId`)
    return (
        <div>
            <Routes>
                <Route path={`${navigate("/cities")}:cityId`} element={<View/>} />
            </Routes>
        </div>
        )
}

export default CityViews