import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function City({city}){
  return(
      <Card style={{ margin: '0.6rem' }}>
        <Image src={city.views[0].images[0].url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{city.name}</Card.Header>
          <Card.Meta>
            <span>{city.country}, {city.area}</span>
          </Card.Meta>
          <Card.Description>
              <p>Best month to visit {city.name}:</p> 
              {city.seasons.map(s=><React.Fragment key={s.id}>{s.text} </React.Fragment>)}
              <p>{city.name} is famous for:</p> 
              {city.styles.map(s=><React.Fragment key={s.id}>{s.text} </React.Fragment>)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='map' />
            {city.views.length} Views
        </Card.Content>
      </Card>
)}

export default City