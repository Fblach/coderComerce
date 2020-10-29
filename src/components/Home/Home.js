import React from 'react'
import Container from 'react-bootstrap/Container'
import ItemListContainer from '../ItemListCointainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'

function Home(){
    let stock = 10;

    const handleAdd = (counter)=>{
        return()=>{
            if(stock <= 0){
                alert('no stock left')
            }
            else{
                alert(counter + ' items added')
            }
        }
    }
    return(
        <Container>
            <ItemListContainer titulo="Renderizado del titulo"/>
            <ItemCount onAdd={handleAdd} stock={stock} inicial={1}/>
        </Container>
    )}

export default Home;