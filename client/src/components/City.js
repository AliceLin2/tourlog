import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function City({city}){
  return(
      <Card>
        <Image src={city.symbol_image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{city.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{city.area}</span>
          </Card.Meta>
          <Card.Description>
            famous for a lot of natural wonders like Northern Lights, glaciers, active volcanoes, and geysers
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='map' />
            22 Blogs
          </a>
        </Card.Content>
      </Card>
)}

export default City