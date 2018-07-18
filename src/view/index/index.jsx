import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { Icon } from 'antd';
import './index.less';

import Homepage from '../homepage/index.jsx';
import Message from '../message/index.jsx';
import Write from '../write/index.jsx';
import Leave from '../leave/index.jsx';
import Private from '../private/index.jsx';
import Artical from '../artical/index.jsx';
import Community from '../community/index.jsx';
import MyFocus from '../myFocus/index.jsx';
import FocusMe from '../focusMe/index.jsx';
class App extends Component {
  state = {
    categoryList: [
      {
        path:'/page/index/message',
        name: '消息提醒',
        icon: 'bell'
      },
      {
        path:'/page/index/write',
        name: '写文章',
        icon: 'edit'
      },
      {
        path:'/page/index/leave',
        name: '留言板',
        icon: 'file-text'
      },
      {
        path:'/page/index/private',
        name: '私信',
        icon: 'mail'
      }
    ],
    card: [
      {
        path:'/page/index/artical',
        name: '收藏文章',
        icon: 'profile'
      },
      {
        path:'/page/index/community',
        name: '收藏社区',
        icon: 'team'
      },
      {
        path:'/page/index/muFocus',
        name: '我的关注',
        icon: 'user-add'
      },
      {
        path:'/page/index/focusMe',
        name: '关注我的',
        icon: 'usergroup-add'
      }
    ],
    routes: [
      {
        path: '/page/index/homepage',
        component: Homepage
      },
      {
        path: '/page/index/message',
        component: Message
      },
      {
        path: '/page/index/write',
        component: Write
      },
      {
        path: '/page/index/leave',
        component: Leave
      },
      {
        path: '/page/index/private',
        component: Private
      },
      {
        path: '/page/index/artical',
        component: Artical
      },
      {
        path: '/page/index/community',
        component: Community
      },
      {
        path: '/page/index/muFocus',
        component: MyFocus
      },
      {
        path: '/page/index/focusMe',
        component: FocusMe
      }
    ]
  }
  render() {
    return (
      <div className="homepage">
        <div className="sideBar">
          <div className="categoryList">
            {
              this.state.categoryList.map((item,index) => {
                return <Link key={index} to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              })
            }
          </div>
          <div className="card">
            {
              this.state.card.map((item,index) => {
                return <Link key={index} to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              })
            }
          </div>
        </div>
        <div className="content">
          <Switch>
            {
              this.state.routes.map((item,index) => {
                return <Route path={item.path} key={index} component={item.component} />
              })
            }
            <Redirect from='/page/index' to='/page/index/homepage'/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
