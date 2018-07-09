import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../view/app/index.jsx';
import Login from '../view/login/index.jsx';
import Register from '../view/register/index.jsx';
import SetPwd from '../view/setPwd/index.jsx';
import Layout from '../layout/layout.jsx';
const Routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/setPwd" component={SetPwd} />
            <Route path="/page" component={App} />
            <Route path="/layout" component={Layout} />
        </div>
    </BrowserRouter>
)
export default Routes
