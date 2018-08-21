import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.less'

import SettingHd from '../../../components/settingHd'
import SettingItem from '../../../components/settingItem'

class Account extends Component {
  state = {
    accData: [
      {
        title: '密码',
        tips: '已设置'
      },
      {
        title: '绑定手机',
        tips: '+86-15057159482'
      },
      {
        title: '绑定邮箱',
        tips: '未绑定'
      }
    ]
  }
  render() {
    return (
      <div className="account">
        <SettingHd
          settingTit="账户与密码"
          settingTips={['私信设置/邀请设置/赞同与赞赏/关注/邮件设置','注意：为保证帐号安全，需进行二次验证。']}
        ></SettingHd>
        <div className="accCont">
          {
            this.state.accData.map((item,index) => {
              return <SettingItem key={index} title={item.title} tips={item.tips}></SettingItem>
            })
          }
          <div className="thirdParty">
            <h2>绑定第三方账号</h2>
            <a href="javascrip:;" className="wechat"><Icon type="wechat"></Icon>绑定微信</a>
            <a href="javascrip:;" className="weibo"><Icon type="weibo"></Icon>绑定微博</a>
            <a href="javascrip:;" className="qq"><Icon type="qq"></Icon>绑定QQ</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Account
