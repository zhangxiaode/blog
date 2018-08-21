import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import { Icon } from 'antd'

import './index.less'

import Account from './account/index.jsx'
import Msg from './msg/index.jsx'
import Shiled from './shiled/index.jsx'
import Conceal from './conceal/index.jsx'
import Prefer from './prefer/index.jsx'

class Setting extends Component {
  state = {
    settingItems: [
      {
        path:'/page/setting/account',
        name: '账户与密码',
        icon: 'user'
      },
      {
        path:'/page/setting/msg',
        name: '消息与邮件',
        icon: 'mail'
      },
      {
        path:'/page/setting/shiled',
        name: '屏蔽',
        icon: 'close-circle-o'
      },
      {
        path:'/page/setting/conceal',
        name: '隐私',
        icon: 'lock'
      },
      {
        path:'/page/setting/prefer',
        name: '偏好设置',
        icon: 'heart-o'
      }
    ],
    routes: [
      {
        path: '/page/setting/account',
        component: Account
      },
      {
        path: '/page/setting/msg',
        component: Msg
      },
      {
        path: '/page/setting/shiled',
        component: Shiled
      },
      {
        path: '/page/setting/conceal',
        component: Conceal
      },
      {
        path: '/page/setting/prefer',
        component: Prefer
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
      <div className="setting">
        <div className="settingHd">
          {
            this.state.settingItems.map((item,index) => {
              return <Link key={index} onClick={()=>this.switchPage(index)} className={this.props.menuIndex === index ? 'actived' : ''} to={item.path}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            })
          }
        </div>
        <div className="settingBd">
          <div className="settingCont">
            <Switch>
              {
                this.state.routes.map((item,index) => {
                  return <Route path={item.path} key={index} component={item.component} />
                })
              }
              <Redirect from='/page/setting' to='/page/setting/account'/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
Setting = connect(mapStateToProps, mapDispatchToProps)(Setting)
export default Setting
