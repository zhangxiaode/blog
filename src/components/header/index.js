import React, { Component } from 'react';
import './header.less';

import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">首页</Link>
        <Link to="/home">首页</Link>
        <Link to="/register">注册页</Link>
        <Link to="/login">登录页</Link>
        {/* <div className="logo">logo</div>
        <div className="nav">nav</div>
        <div className="userInfo">userInfo</div> */}
      </div>
    );
  }
}

export default Header;
