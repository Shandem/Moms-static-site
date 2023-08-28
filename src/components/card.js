import React from 'react';
import './card.scss'

const card = (props) => {
    return (
        <div className='card-container'>
            <img src={process.env.PUBLIC_URL + `${ props.img }`} 
                alt={ props.altName } 
                height={ props.height } 
                width={ props.width }/>
            <div className="info">
                <h3 className="name">Name: { props.name }</h3>
               {/* <h4 className='price'>Price:{ props.price }</h4> */}
                <p className='dimensions'> <span> Dimensions:</span> { props.dimensions }</p>
                <p className='description'> <span> Description: </span>{ props.description }</p>
            </div>
        </div>
    );
}

export default card;
