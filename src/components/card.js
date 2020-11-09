import React from 'react';
import './card.scss'

const card = (props) => {
    return (
        <div className='card-container'>
            <img src={process.env.PUBLIC_URL + `${props.img}`} alt={props.altName} height={props.height} width={props.width}/>
            <h3 className='price'>{props.price}</h3>
            <p className='dimensions'>{ props.dimensions}</p>
            <p className='description'>{props.description}</p>
        </div>
    );
}

export default card;
