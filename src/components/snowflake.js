import React from 'react';

const snowflake = (props) => {
    return (
        <div>
               <img src={process.env.PUBLIC_URL + 'snowflake.png'} alt='snowflake' height={props.height} width={props.width}/>
        </div>
    );
}

export default snowflake;
