import React from 'react';

export default ({id, count, onIncClickHandler, onDecClickHandler}) => {
    return (
        <>
        <button onClick={() => onDecClickHandler(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => onIncClickHandler(id)}>+</button>
        </>
    );
}