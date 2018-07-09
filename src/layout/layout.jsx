import React, { Component } from 'react';
import Header from '../components/header/index.jsx';
import Menu from '../components/menu/index.jsx';
import Main from '../components/main/index.jsx';

class Layout extends Component {
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

export default Layout;
