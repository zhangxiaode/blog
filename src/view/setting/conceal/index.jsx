import React, { Component } from 'react'
import { Switch } from 'antd'
import './index.less'

import SettingHd from '../../../components/settingHd'
import SettingItem from '../../../components/settingItem'

class Conceal extends Component {
  state = {
    shiledData: [
      {
        title: '隐私保护',
        tips: ''
      }
    ]
  }
  onChange = (checked) => {
    console.log(123,checked)
  }
  render() {
    return (
      <div className="conceal">
        <SettingHd
          settingTit="隐私"
          settingTips={['隐私保护']}
        ></SettingHd>
        <div className="concealCont">
          {
            this.state.shiledData.map((item, index) => {
              return <SettingItem key={index} title={item.title} tips={item.tips}></SettingItem>
            })
          }
          <div className="hideInfo">
            <p>在站外隐藏个人信息</p>
            <Switch defaultChecked onChange={this.onChange} />
          </div>
        </div>
      </div>
    )
  }
}

export default Conceal
