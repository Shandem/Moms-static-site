import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import index from '../components/index'


export default (
    <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/index' component={ index } />
    </Switch>
);