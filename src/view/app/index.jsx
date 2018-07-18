import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.less';
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
        <Header />
        <div className="wrap">
          {
            this.state.routes.map((item,index) => {
              return <Route path={item.path} key={index} component={item.component} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
