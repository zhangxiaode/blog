import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import { Icon } from 'antd'
import { connect } from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import './index.less'

import Homepage from './homepage/index.jsx'
import Message from './message/index.jsx'
import Write from './write/index.jsx'
import Leave from './leave/index.jsx'
import Private from './private/index.jsx'
import Artical from './artical/index.jsx'
import Community from './community/index.jsx'
import MyFocus from './myFocus/index.jsx'
import FocusMe from './focusMe/index.jsx'
class Index extends Component {
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
        path:'/page/index/myFocus',
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
        path: '/page/index/myFocus',
        component: MyFocus
      },
      {
        path: '/page/index/focusMe',
        component: FocusMe
      },
      {
        path: '/page/index/homepage',
        component: Homepage
      }
    ]
  }
  componentDidMount() {
    this.state.routes.forEach((item,index) => {
      if(item.path === this.props.location.pathname){
        this.props.changeMenuIndex(index)
      }
    })
  }
  switchPage(index) {
    this.props.changeMenuIndex(index)
  }
  render() {
    return (
      <div className="home">
        <div className="sideBar">
          <div className="categoryList">
            {
              this.state.categoryList.map((item,index) => {
                return <Link key={index} onClick={()=>this.switchPage(index)} className={this.props.menuIndex === index ? 'actived' : ''} to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              })
            }
          </div>
          <div className="card">
            {
              this.state.card.map((item,index) => {
                return <Link key={index} onClick={()=>this.switchPage(this.state.categoryList.length + index)} className={this.props.menuIndex === this.state.categoryList.length + index ? 'actived' : ''} to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              })
            }
          </div>
        </div>
        <div className="main">
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
      </div>
    )
  }
}
Index = connect(mapStateToProps, mapDispatchToProps)(Index)

export default Index;
