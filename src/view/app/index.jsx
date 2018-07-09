import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.less';
import Header from '../../components/header/index.jsx'
import Homepage from '../../view/index/index.jsx';
import Topic from '../../view/topic/index.jsx';
import TextChat from '../../view/textChat/index.jsx';
import VideoChat from '../../view/videoChat/index.jsx';
import Collections from '../../view/collections/index.jsx';
import Setting from '../../view/setting/index.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="wrap">
          <Route path="/page/index" component={Homepage} />
          <Route path="/page/topic" component={Topic} />
          <Route path="/page/textChat" component={TextChat} />
          <Route path="/page/videoChat" component={VideoChat} />
          <Route path="/page/collections" component={Collections} />
          <Route path="/page/setting" component={Setting} />
        </div>
      </div>
    );
  }
}

export default App;
