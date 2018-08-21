import React, { Component } from 'react'
import './index.less'

import SettingHd from '../../../components/settingHd'
import SettingItem from '../../../components/settingItem'

class Msg extends Component {
  state = {
    msgData: [
      {
        title: '私信设置',
        tips: '允许谁给我发私信'
      },
      {
        title: '赞同/赞赏消息设置',
        tips: '有人对我赞同或赞赏时，我会收到消息通知'
      },
      {
        title: '关注消息设置',
        tips: '我的关注内容有新动态时，我会收到消息通知'
      },
      {
        title: '邮件设置',
        tips: '重要事件发生时，我将会收到邮件提醒'
      }
    ]
  }
  render() {
    return (
      <div className="msg">
        <SettingHd
          settingTit="消息与私信"
          settingTips={['私信设置/邀请设置/赞同与赞赏/关注/邮件设置']}
        ></SettingHd>
        <div className="msgCont">
          {
            this.state.msgData.map((item, index) => {
              return <SettingItem key={index} title={item.title} tips={item.tips}></SettingItem>
            })
          }
        </div>
      </div>
    )
  }
}

export default Msg
