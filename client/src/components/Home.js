import React from "react"
import BestSeason from "./BestSeason"
import Styles from "./Styles"
import { Segment, Image} from 'semantic-ui-react'

function Home({styles, seasons}){

    return (
        <div className="home">
            <Segment>
                <BestSeason seasons={seasons}/>
            </Segment>
            <Segment>
                <Styles styles={styles}/>
            </Segment>
            <Image src="https://tourlog.s3.amazonaws.com/Dun+Huang.jpeg"/>
        </div>
        )
}

export default Home