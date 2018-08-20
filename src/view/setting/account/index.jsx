import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.less'

class Account extends Component {
  render() {
    return (
      <div className="account">
        <div className="accTitle">
          <h2>账户与密码</h2>
          <p>绑定手机和邮箱，并设置密码，帐号更安全</p>
          <p>注意：为保证帐号安全，需进行二次验证。</p>
        </div>
        <div className="accBody">
          <div className="accItem">
            <div className="accTxt">
              <h2>密码</h2>
              <p>已设置</p>
            </div>
            <div className="accBtn">
              <a href="javascrip:;">编辑</a>
            </div>
          </div>
          <div className="accItem">
            <div className="accTxt">
              <h2>绑定手机</h2>
              <p>+86-15057159482</p>
            </div>
            <div className="accBtn">
              <a href="javascrip:;">编辑</a>
            </div>
          </div>
          <div className="accItem">
            <div className="accTxt">
              <h2>绑定邮箱</h2>
              <p>未绑定</p>
            </div>
            <div className="accBtn">
              <a href="javascrip:;">编辑</a>
            </div>
          </div>
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
