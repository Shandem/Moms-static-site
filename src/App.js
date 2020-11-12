import React from 'react';
import routes from './route/routes'
import Header from './components/header'
import Footer from './components/footer'
import Index from './components/index'

import OrderForm from './components/orderForm'
import Welcome from './components/welcome'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      { routes }
      <Welcome/>
      <Index/>
      <OrderForm/>
      <Footer/>
    </div>
  );
}

export default App;
