import React from 'react';

const Item = ({image, name, price}) => (
    <li className='item-envelop'>
        <img className='item-img' alt={name} src={image}/>
        <p> {name}</p>
        <p> {price}</p>
    </li>
);

export default Item;