import React from 'react'
import Item, {items} from '../../ItemListCointainer/Item/Item'
import {Card } from 'react-bootstrap' 
import pic from '../../images/beans.jpg'


export default function ItemDetail(){

    
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
                <Card.Title>Coffee Grain</Card.Title>
                <Card.Text>$100</Card.Text>
            </Card.Body>
        </Card>
    )

} 