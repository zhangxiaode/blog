import React from 'react';
import App from '../view/app/index';
import Register from '../view/app/index';
import Login from '../view/app/index';
import { Router, Route } from 'react-router'
const Routes = () => {
    return (
        <Router path="/" component = { App }>
            <Route path="register" component={Register} />
            <Route path="login" component={Login} />
        </Router>
    )
}
export default Routes
