import React from "react"
import {Link} from "react-router-dom"
import { Image } from 'semantic-ui-react'

function BestSeason({seasons}){
    function selection(seasons, month){
        let result
        if(seasons)
            (result = (seasons.filter(s=>s.id===month)[0].cities.map(c=>{   
                return(            
                    <Link key={c.id} to={`/cities/${c.id}`}>
                        <Image src={c.symbol_image} height="200" weight="200" size='medium' circular />
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
                    <a name="January" onMouseOver={handleShow} href="javascript:void(0)">January</a>
                    <span>  |  </span>
                    <a name="February" onMouseOver={handleShow} href="javascript:void(0)">February</a>
                    <span>  |  </span>
                    <a name="March" onMouseOver={handleShow} href="javascript:void(0)">March</a>
                    <span>  |  </span>
                    <a name="Apirl" onMouseOver={handleShow} href="javascript:void(0)">Apirl</a>
                    <span>  |  </span>
                    <a name="May" onMouseOver={handleShow} href="javascript:void(0)">May</a>
                    <span>  |  </span>
                    <a name="June" onMouseOver={handleShow} href="javascript:void(0)">June</a>
                    <span>  |  </span>
                    <a name="July" onMouseOver={handleShow} href="javascript:void(0)">July</a>
                    <span>  |  </span>
                    <a name="August" onMouseOver={handleShow} href="javascript:void(0)">August</a>
                    <span>  |  </span>
                    <a name="September" onMouseOver={handleShow} href="javascript:void(0)">September</a>
                    <span>  |  </span>
                    <a name="October" onMouseOver={handleShow} href="javascript:void(0)">October</a>
                    <span>  |  </span>
                    <a name="November" onMouseOver={handleShow} href="javascript:void(0)">November</a>
                    <span>  |  </span>
                    <a name="December" onMouseOver={handleShow} href="javascript:void(0)">December</a>
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