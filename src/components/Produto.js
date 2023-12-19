import React, {useState, useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default class Produto extends React.Component {


    render(){
        return (



            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.title.thumbnail} />
            <Card.Body>
              <Card.Title>{this.props.title.title} -- {this.props.title.price}</Card.Title>
              <Card.Text>
              {this.props.title.description}
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          
         
        );
    }
}
