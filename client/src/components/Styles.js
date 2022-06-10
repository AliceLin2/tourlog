import React from "react"
import { Image } from 'semantic-ui-react'
import {Link} from "react-router-dom"

function Styles({styles}){
    function selection(styles, index){
        let result
        if(styles.length>0)
            (result = (styles.filter(s=>s.id===index)[0].cities.map(c=>{
                if(c.views.length===0) 
                    return null
                else  
                    return(            
                        <Link key={c.id} to={`/cities/${c.id}`} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Image src={c.views[0].images[0].url} height="200" weight="200" size='large' circular />
                            <div>{c.name}</div>
                        </Link>)})))
        return result}

    function handleShow(e){
        Array.from(document.getElementsByClassName("style-show")).forEach(element => {
            element.className = "style-hide"
        })
        document.getElementById(`${e.target.name}`).className = ("style-show")
    }

    return (
        <div className="style-selection">
            <div className="title">
                <h2>Style Selection</h2>
            </div>
            <div className="title">
                <a name="cultural history" onMouseOver={handleShow} >Cultural History</a>
                <span>  |  </span>
                <a name="snow scene" onMouseOver={handleShow} href="#">Snow Scene</a>
                <span>  |  </span>
                <a name="starry sky" onMouseOver={handleShow} href="#">Starry Sky</a>
                <span>  |  </span>
                <a name="sea of flowers" onMouseOver={handleShow} href="#">Sea of Flowers</a>
                <span>  |  </span>
                <a name="mountain" onMouseOver={handleShow} href="#">Mountain</a>
                <span>  |  </span>
                <a name="aurora" onMouseOver={handleShow} href="#">Aurora</a>
                <span>  |  </span>
                <a name="beach" onMouseOver={handleShow} href="#">Beach</a>
                <span>  |  </span>
                <a name="prairies" onMouseOver={handleShow} href="#">Prairies</a>
            </div>
            <div className="style-list">
                <div className="style-show" id="cultural history">
                    {selection(styles, 1)}
                </div>
                <div className="style-hide" id="snow scene">
                    {selection(styles, 2)}
                </div>
                <div className="style-hide" id="starry sky">
                    {selection(styles, 3)}
                </div>
                <div className="style-hide" id="sea of flowers">
                    {selection(styles, 4)}
                </div>
                <div className="style-hide" id="mountain">
                    {selection(styles, 5)}
                </div>
                <div className="style-hide" id="aurora">
                    {selection(styles, 6)}
                </div>
                <div className="style-hide" id="beach">
                    {selection(styles, 7)}
                </div>
                <div className="style-hide" id="prairies">
                    {selection(styles, 8)}
                </div>
            </div>
        </div>
        )
}

export default Styles