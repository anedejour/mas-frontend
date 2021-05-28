import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/*" exact component={NotFound}/>
    </Switch>
)

export default Routes;