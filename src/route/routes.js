import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import index from '../components/index'


export default (
    <Switch>
        <Route exact path='/' component={ index } />
        <Route path='/index' component={ index } />
    </Switch>
);