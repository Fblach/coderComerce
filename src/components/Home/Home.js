import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ItemListContainer from '../ItemListCointainer/ItemListContainer'

function Home(){
    return(
        <Jumbotron>
            <ItemListContainer titulo="Props"/>
        </Jumbotron>
    )}

export default Home;