import React from 'react';
import routes from './route/routes'
import Header from './components/header'
import Footer from './components/footer'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      { routes }
      hi
      <Footer/>
    </div>
  );
}

export default App;
