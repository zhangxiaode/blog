import React, { Component } from 'react';
import './index.less';

import { NavLink } from 'react-router-dom'

import { Avatar, Input, Icon } from 'antd';
const Search = Input.Search;

class Header extends Component {
  state = {
    navList: [
      {
        path:'/page/index',
        name: '首页',
        icon: 'home'
      },
      {
        path:'/page/topic',
        name: '话题',
        icon: 'eye-o'
      },
      {
        path:'/page/textChat',
        name: '聊天社区',
        icon: 'message'
      },
      {
        path:'/page/videoChat',
        name: '视频社区',
        icon: 'video-camera'
      },
      {
        path:'/page/collections',
        name: '我的收藏',
        icon: 'heart-o'
      },
      {
        path:'/page/setting',
        name: '设置',
        icon: 'setting'
      }
    ]
  }
  handleSearch() {

  }
  switchPage = () => {
    this.props.changeMenuIndex(-1)
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
              return <NavLink activeClassName="actived" key={index} onClick={this.switchPage} to={item.path}>
                <Icon type={item.icon} />{item.name}
              </NavLink>
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
