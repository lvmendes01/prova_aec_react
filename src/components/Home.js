import React, {useState, useEffect, useMemo} from 'react'


import Produto from './Produto.js'

import Form from 'react-bootstrap/Form';
import data from "./../_services/produtos.json";

export default function  Home() {

    const [filterValue, setFilterValue] = useState('');

    const listaProdutosFiltrados = useMemo(() => {
      return data.filter(user => user.title.toLowerCase().includes(filterValue.toLowerCase()));
    }, [data, filterValue]);
  
    const handleFilterChange = e => {
      setFilterValue(e.target.value);
    };

    

        return (



            <div class="container" >
            <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
       <Form.Control type="text" placeholder="Buscar por nome" onChange={handleFilterChange} />
     </Form.Group>
    
   </Form>

        <div class="row">
 {listaProdutosFiltrados.map((item) => (
     <div class="col-4">
     <Produto title={item} />
     </div> 

 ))}
 </div> 
</div>

          
         
        );
}
