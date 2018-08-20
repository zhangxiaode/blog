import React, { Component } from 'react'
import './index.less'

class Msg extends Component {
  render() {
    return (
      <div className="msg">
        <div className="msgTitle">
          <h2>消息与私信</h2>
          <p>私信设置/邀请设置/赞同与赞赏/关注/邮件设置</p>
        </div>
      </div>
    )
  }
}

export default Msg
