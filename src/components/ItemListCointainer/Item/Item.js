import React from 'react';


export default function Item(){

    const items = [{
        id: 1,
        title: 'Coffee Beans',
        price: '100',
        pictureUrl: ''
    },{
        id: 2,
        title: 'Coffee pure',
        price: '200',
        pictureUrl: ''
    }];

    function Print(props){
        const defItem = props.items.map((item)=> 
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>)
        return(<div>{defItem}</div>)
    }

    return(
        <Print items={items}/>      
    )
}