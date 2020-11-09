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
               Web site Designed & Built w/React <br/> <a href="https://www.joshuahgutierrez.com">by Joshuah Gutierrez</a> 
            </div>
            
        </div>
    );
}

export default footer;
