import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../view/app/index.jsx'
import Login from '../view/login/index.jsx'
import Register from '../view/register/index.jsx'
import SetPwd from '../view/setPwd/index.jsx'
import Layout from '../layout/layout.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import rootReducer from '../store/reducer'
// import mapStateToProps from '../store/state'
// import mapDispatchToProps from '../store/despatch'
const store = createStore(rootReducer)

class BrowserRoutes extends Component{
    constructor(props){
        super()
        console.log(123,props)
    }
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
// BrowserRoutes = connect(mapStateToProps, mapDispatchToProps)(BrowserRoutes)
const Routes = ({ store }) => (
    <Provider store={store}>
        <BrowserRoutes />
    </Provider>
)
Routes.propTypes = {
    store: PropTypes.object.isRequired
}
export default <Routes store={store} />
