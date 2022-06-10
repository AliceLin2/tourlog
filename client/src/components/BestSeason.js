import React from "react"
import {Link} from "react-router-dom"
import { Image } from 'semantic-ui-react'

function BestSeason({seasons}){
    function selection(seasons, month){
        let result
        if(seasons.length>0)
            (result = (seasons.filter(s=>s.id===month)[0].cities.map(c=>{
                if(c.views.length===0)
                return null
                else  
                    return(            
                        <Link key={c.id} to={`/cities/${c.id}`}>
                            <Image src={c.views[0].images[0].url} height="200" weight="200" size='large' circular />
                            <div>{c.name}</div>
                        </Link>
                )})))
        return result}

    function handleShow(e){
        Array.from(document.getElementsByClassName("month-show")).forEach(element => {
            element.className = "month-hide"
        })
        document.getElementById(`${e.target.name}`).className = ("month-show")
    }

    return (
        <div className="seasonal-selection">
            <div className="title">
                <h2>Seasonal Selection</h2>
            </div>
                <div className="title">
                    <a name="January" onMouseOver={handleShow} href="#">January</a>
                    <span>  |  </span>
                    <a name="February" onMouseOver={handleShow} href="#">February</a>
                    <span>  |  </span>
                    <a name="March" onMouseOver={handleShow} href="#">March</a>
                    <span>  |  </span>
                    <a name="Apirl" onMouseOver={handleShow} href="#">Apirl</a>
                    <span>  |  </span>
                    <a name="May" onMouseOver={handleShow} href="#">May</a>
                    <span>  |  </span>
                    <a name="June" onMouseOver={handleShow} href="#">June</a>
                    <span>  |  </span>
                    <a name="July" onMouseOver={handleShow} href="#">July</a>
                    <span>  |  </span>
                    <a name="August" onMouseOver={handleShow} href="#">August</a>
                    <span>  |  </span>
                    <a name="September" onMouseOver={handleShow} href="#">September</a>
                    <span>  |  </span>
                    <a name="October" onMouseOver={handleShow} href="#">October</a>
                    <span>  |  </span>
                    <a name="November" onMouseOver={handleShow} href="#">November</a>
                    <span>  |  </span>
                    <a name="December" onMouseOver={handleShow} href="#">December</a>
                </div>
                <div className="month-list">
                    <div className="month-show" id="January">
                        {selection(seasons, 1)}
                    </div>
                    <div className="month-hide" id="February">
                        {selection(seasons, 2)}
                    </div>
                    <div className="month-hide" id="March">
                        {selection(seasons, 3)}
                    </div>
                    <div className="month-hide" id="Apirl">
                        {selection(seasons, 4)}
                    </div>
                    <div className="month-hide" id="May">
                        {selection(seasons, 5)}
                    </div>
                    <div className="month-hide" id="June">
                        {selection(seasons, 6)}
                    </div>
                    <div className="month-hide" id="July">
                        {selection(seasons, 7)}
                    </div>
                    <div className="month-hide" id="August">
                        {selection(seasons, 8)}
                    </div>
                    <div className="month-hide" id="September">
                        {selection(seasons, 9)}
                    </div>
                    <div className="month-hide" id="October">
                        {selection(seasons, 10)}
                    </div>
                    <div className="month-hide" id="November">
                        {selection(seasons, 11)}
                    </div>
                    <div className="month-hide" id="December">
                        {selection(seasons, 12)}
                    </div>
                </div>
        </div>
        )
}

export default BestSeason