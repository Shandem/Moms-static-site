import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Home</Link>
      </div>
      <div className="links">
        <ul>
        <li><Link to={'/index'}>Crafts</Link></li>
       

        </ul>
      </div>
    </header>
  );
}

export default Header;
