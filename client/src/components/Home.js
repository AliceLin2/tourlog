import React from "react"
import BestSeason from "./BestSeason"
import Styles from "./Styles"
import { Segment} from 'semantic-ui-react'

function Home({styles, seasons}){

    return (
        <div className="home">
            <Segment>
                <BestSeason seasons={seasons}/>
            </Segment>
            <Segment>
                <Styles styles={styles} />
            </Segment>
        </div>
        )
}

export default Home