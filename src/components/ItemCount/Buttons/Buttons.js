import React from 'react';
import Button from 'react-bootstrap/Button'


export default function Buttons({plus, onClick, counter, setCounter}){

    let value = plus ? "+" : "-"; 

    let amount = plus ? (counter + 1) : (counter - 1);

    return (<Button variant="secondary" onClick = {onClick(amount)} style={{ alignItems: "center", width: "50px", height: "50px"}}>{value}</Button>)
}