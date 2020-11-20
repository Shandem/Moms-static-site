import React from 'react';
import Snowflake from './snowflake'
import './welcome.scss'

const welcome = () => {
    return (
        <div className='welcome'> 
        <h1 className='Title'>Gaby's Crafty Things</h1>
        <div className="snowflake-container">
            <Snowflake height='50px' width='50px'/>
            <Snowflake height='50px' width='50px'/>
            <Snowflake height='50px' width='50px'/>
            <Snowflake height='50px' width='50px'/>
            <Snowflake height='50px' width='50px'/>
        </div>
        <p className='intro'>I'm Gaby from South Monterey county. Every year for the past 20+ years 
        I have enjoyed selling my holiday decorations throughout Northern California 
        and would love to bring you some extra joy to your holiday cheer. Happy holidays
  </p>
            
        </div>
    );
}

export default welcome;
