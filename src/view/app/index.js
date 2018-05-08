import React, { Component } from 'react';
import './app.less';
import Header from '../header/index'
import Menu from '../menu/index'
import Main from '../main/index'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="wrap">
          <Menu />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
