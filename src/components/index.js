import React from 'react';
import './index.scss'
import Card from './card'

const index = () => {
    return (
        <div className='index-view'>
            <Card 
                img="Santa-sleig.JPG" 
                height="500px" 
                width="650px"
                altName='Santas sleigh'
                price='$100'
                dimensions='10ft X 10ft'
                description='Its santas sligh with toys in it'
                />
            <Card 
                img="Santa-sleig.JPG" 
                height="500px" 
                width="650px"
                altName='Santas slegh'
                price='$100'
                dimensions='10ft X 10ft'
                description='Its santas sligh with toys in it'
                />
        </div>
    );
}

export default index;
