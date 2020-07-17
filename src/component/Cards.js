import React from 'react';
import Card from './Card';

const list = {
    display:'flex',
    flexWrap:'wrap',
    listStyle:'none'
}

const row = {
    width: 'calc(100% / 4 - 30px)',
    margin: '15px',
    border: '1px solid black',
    padding:'10px',
    textAlign:'center'
}
export default ({products,onDecClickHandler,onIncClickHandler}) => {
    return (
        <ul style={list}>
            {
                products.map(p => <li style={row} key={p.id}>
                        <Card 
                        id={p.id}
                        count={p.count} 
                        title={p.title}
                        price={p.price}
                        onDecClickHandler={onDecClickHandler}
                        onIncClickHandler={onIncClickHandler}
                        />
                        </li>
                    )
            }
        </ul>
    );
}