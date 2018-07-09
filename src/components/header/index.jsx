import React, { Component } from 'react';
import './header.less';

import { Link } from 'react-router-dom'

import { Avatar, Input } from 'antd';
const Search = Input.Search;

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this);
  // }
  handleSearch = () => {

  }
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <div className="logo">logo</div>
          <div className="search">
            <Search
              placeholder="搜索你感兴趣的内容"
              onSearch={this.handleSearch}
              enterButton
            />
          </div>
        </div>
        <div className="nav">
          <Link to="/page/index">首页</Link>
          <Link to="/page/topic">话题</Link>
          <Link to="/page/textChat">聊天社区</Link>
          <Link to="/page/videoChat">视频社区</Link>
          <Link to="/page/collections">我的收藏</Link>
          <Link to="/page/setting">设置</Link>
        </div>
        <div className="userInfo">
          <Avatar icon="user" />
          <span>zhangxiaode</span>
        </div>
      </div>
    );
  }
}

export default Header;
