import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './menu.less';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <p>
          <Link to="/layout/page">首页</Link>
        </p>
        <p>
          <Link to="/layout/page2">话题</Link>
        </p>
        <p>
          <Link to="/layout/page">聊天社区</Link>
        </p>
        <p>
          <Link to="/layout/page2">视频社区</Link>
        </p>
        <p>
          <Link to="/layout/page">我的收藏</Link>
        </p>
        <p>
          <Link to="/layout/page2">设置</Link>
        </p>
      </div>
    );
  }
}

export default Menu;
