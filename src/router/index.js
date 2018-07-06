import React from 'react';
import App from '../view/app/index';
import Login from '../view/login/index.jsx';
import Register from '../view/register/index.jsx';
import SetPwd from '../view/setPwd/index.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
class Home extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <div>Welcome to the app!</div>
        );
    }
}
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/setPwd" component={SetPwd}/>
                </div>
            </Router>
        )
    }
}
export default Routes
