import React from 'react';
import Counter from './Counter';

export default ({id,title,price,count, onIncClickHandler, onDecClickHandler}) => {
    return (
        <>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <Counter 
        id={id}
        count={count} 
        onIncClickHandler={onIncClickHandler} 
        onDecClickHandler={onDecClickHandler}/>
        </>
    );
}