import React from 'react';

const Item = ({market, image, name, price}) => (
    <div className='item-envelop'>
        <p>{market}</p>
        <img className='item-img' alt={name} src={image}/>
        <p> {name}</p>
        <p> {price}</p>
    </div>
);

export default Item;