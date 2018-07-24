import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import './index.less';
import Header from '../../components/header/index.jsx'
import Homepage from '../index/index.jsx';
import Topic from '../topic/index.jsx';
import TextChat from '../textChat/index.jsx';
import VideoChat from '../videoChat/index.jsx';
import Collections from '../collections/index.jsx';
import Setting from '../setting/index.jsx';

class App extends Component {
  state = {
    routes: [
      {
        path: '/page/index',
        component: Homepage
      },
      {
        path: '/page/topic',
        component: Topic
      },
      {
        path: '/page/textChat',
        component: TextChat
      },
      {
        path: '/page/videoChat',
        component: VideoChat
      },
      {
        path: '/page/collections',
        component: Collections
      },
      {
        path: '/page/setting',
        component: Setting
      },
    ]
  }
  render() {
    return (
      <div className="app">
        <Header changeMenuIndex={this.props.changeMenuIndex} />
        <div className="wrap">
          <Switch>
            {
              this.state.routes.map((item,index) => {
                return <Route path={item.path} key={index} component={item.component} />
              })
            }
            <Redirect from='/page' to='/page/index'/>
          </Switch>
        </div>
      </div>
    );
  }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
