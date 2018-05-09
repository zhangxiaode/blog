import React, { Component } from 'react';
import './app.less';
import Header from '../../components/header/index'
import Menu from '../../components/menu/index'
import Main from '../../components/main/index'

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
