import React, { Component } from 'react';
import './header.less';

import { NavLink } from 'react-router-dom'

import { Avatar, Input } from 'antd';
const Search = Input.Search;

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this);
  // }
  state = {
    navList: [
      {
        path:'/page/index',
        name: '首页'
      },
      {
        path:'/page/topic',
        name: '话题'
      },
      {
        path:'/page/textChat',
        name: '聊天社区'
      },
      {
        path:'/page/videoChat',
        name: '视频社区'
      },
      {
        path:'/page/collections',
        name: '我的收藏'
      },
      {
        path:'/page/setting',
        name: '设置'
      }
    ]
  }
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
          {
            this.state.navList.map((item,index) => {
              return <NavLink activeClassName="actived" key={index} to={item.path}>{item.name}</NavLink>
            })
          }
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
