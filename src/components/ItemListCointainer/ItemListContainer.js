import React from 'react'
import {Container} from 'react-bootstrap';

function ItemListContainer(props) {
    return (
        <Container>
            <h1>Rederizado del titulo llamado: {props.titulo} </h1>
        </Container>
    )
}

export default ItemListContainer;