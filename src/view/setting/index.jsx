import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import { Icon } from 'antd'

import './index.less'

import Account from './account/index.jsx'
import Msg from './msg/index.jsx'
import Shiled from './shiled/index.jsx'
import Private from './private/index.jsx'
import Prefer from './prefer/index.jsx'

class Setting extends Component {
  state = {
    menuIndex2: -1,
    settingItems: [
      {
        path:'/page/settings/account',
        name: '账户与密码',
        icon: 'bell'
      },
      {
        path:'/page/settings/msg',
        name: '消息与邮件',
        icon: 'bell'
      },
      {
        path:'/page/settings/shiled',
        name: '屏蔽',
        icon: 'bell'
      },
      {
        path:'/page/settings/private',
        name: '隐私',
        icon: 'bell'
      },
      {
        path:'/page/settings/prefer',
        name: '偏好设置',
        icon: 'bell'
      }
    ],
    routes: [
      {
        path: '/page/settings/account',
        component: Account
      },
      {
        path: '/page/settings/msg',
        component: Msg
      },
      {
        path: '/page/settings/shiled',
        component: Shiled
      },
      {
        path: '/page/settings/private',
        component: Private
      },
      {
        path: '/page/settings/prefer',
        component: Prefer
      }
    ]
  }
  componentDidMount() {
  }
  switchPage2(index) {
    this.setState({
      menuIndex2: index
    })
  }
  render() {
    return (
      <div className="setting">
        <div className="settingHd">
          {
            this.state.settingItems.map((item,index) => {
              return <Link key={index} onClick={()=>this.switchPage2(index)} className={this.state.menuIndex2 === index ? 'actived' : ''} to={item.path}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            })
          }
        </div>
        <div className="settingBd">
          <Switch>
            {
              this.state.routes.map((item,index) => {
                return <Route path={item.path} key={index} component={item.component} />
              })
            }
            <Redirect from='/page/settings' to='/page/settings/account'/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default Setting
