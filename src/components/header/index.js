import React, { Component } from 'react';
import './header.less';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">logo</div>
        <div className="nav">nav</div>
        <div className="userInfo">userInfo</div>
      </div>
    );
  }
}

export default Header;
