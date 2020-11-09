import React from 'react';
import Card from './card'

const index = () => {
    return (
        <div>
            Banana
            <Card 
                img="Santa-sleig.JPG" 
                height="500px" 
                width="650px"
                altName='Santas slegh'
                price='$100'
                discription='Its santas sligh with toys in it'
                />
        </div>
    );
}

export default index;
