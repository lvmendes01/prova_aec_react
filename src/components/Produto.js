import React, {useState, useEffect} from 'react'

import Card from 'react-bootstrap/Card';

import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default class Produto extends React.Component {



  adionarItem = (item, quantidade) => {



    const localStorageValue = [{ produto: item.title, valor: item.price, qtd: quantidade, valortotalItem: item.price * quantidade}]; 

      localStorage.setItem('clienteXPTO',localStorageValue);



    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add " +item.title + "..." + item.price,
      showConfirmButton: false,
      timer: 1500
    });
  };


    render(){
        return (



            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.title.thumbnail} />
            <Card.Body>
              <Card.Title>{this.props.title.title} -- {this.props.title.price}</Card.Title>
              <Card.Text>
              {this.props.title.description}
              </Card.Text>
              <Card.Text>
              <Form.Control
        type="number"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
              </Card.Text>
              <Button variant="secondary" size="lg" onClick={(e) => this.adionarItem(this.props.title)}>
      COMPRAR
      </Button>


             
            </Card.Body>
          </Card>

          
         
        );
    }
}
