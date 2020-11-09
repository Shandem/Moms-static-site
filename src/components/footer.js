import React from 'react';
import './footer.scss';

const footer = () => {
    return (
        <div className='footer-container'>
            <div className="company-name">
                Gaby's Crafts
            </div>
            <div className="copyright">
            &copy;2020
            </div>
            <div className="advertise">
               Web site Designed & Built w/React <br/> by Joshuah Gutierrez
            </div>
            
        </div>
    );
}

export default footer;
