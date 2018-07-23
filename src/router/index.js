import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../view/app/index.jsx'
import Login from '../view/login/index.jsx'
import Register from '../view/register/index.jsx'
import SetPwd from '../view/setPwd/index.jsx'
import Layout from '../layout/layout.jsx'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../store/reducer'
import {mapStateToProps, mapDispatchToProps} from '../store/mapToProps'
const store = createStore(rootReducer)

class BrowserRoutes extends Component{
    state = {
        routes:[
            {
                path: '/login',
                component: Login
            },
            {
                path: '/register',
                component: Register
            },
            {
                path: '/setPwd',
                component: SetPwd
            },
            {
                path: '/page',
                component: App
            },
            {
                path: '/layout',
                component: Layout
            }
        ]
    }
    render() {
        return (
            <Router>
                <Switch>
                    {
                        this.state.routes.map((item,index) => {
                            return <Route path={item.path} key={index} component={item.component} />
                        })
                    }
                    <Redirect exact from='/' to='/login'/>
                </Switch>
            </Router>
        );
    }
}
BrowserRoutes = connect(mapStateToProps, mapDispatchToProps)(BrowserRoutes)
export default 
(
    <Provider store={store}>
        <BrowserRoutes />
    </Provider>
)
