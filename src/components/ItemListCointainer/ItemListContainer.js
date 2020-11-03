import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import ItemList from './ItemList/ItemList';

function ItemListContainer(props) {
    const getItems = new Promise((res, rej) => {
        setTimeout(() => { res(items);}, 2000)
    });
    let [items, setItems] = useState([])

    useEffect(
        getItems.then(result => { setItems(result) })
        , [])

    return (
        <Container>
            <h1 style={{textAlign: "center"}}>{props.titulo} </h1>
            <ItemList></ItemList>
        </Container>
    )
}

export default ItemListContainer;