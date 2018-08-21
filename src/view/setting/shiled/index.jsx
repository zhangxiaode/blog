import React, { Component } from 'react'
import { Avatar } from 'antd'
import './index.less'

import SettingHd from '../../../components/settingHd'
import SettingItem from '../../../components/settingItem'

class Shiled extends Component {
  state = {
    shiledData: [
      {
        title: '用户黑名单',
        tips: '查看或撤销已屏蔽用户',
        shiledList: [
          {
            id: 1,
            name: '李献计'
          }
        ]
      },
      {
        title: '话题黑名单',
        tips: '查看或撤销已屏蔽话题',
        shiledList: [
          {
            id: 2,
            name: '前端开发'
          }
        ]
      },
      {
        title: '不看他的动态',
        tips: '屏蔽已关注用户的动态',
        shiledList: [
          {
            id: 3,
            name: '李献计'
          }
        ]
      }
    ]
  }
  render() {
    return (
      <div className="shiled">
        <SettingHd
          settingTit="屏蔽"
          settingTips={['用户黑名单/话题黑名单/不看他的动态']}
        ></SettingHd>
        <div className="shiledCont">
          {
            this.state.shiledData.map((item, index) => {
              return <div className="shildItem">
                <SettingItem key={index} title={item.title} tips={item.tips}></SettingItem>
                <ul className="shiledList">
                  {
                    item.shiledList.map((child,idx) => {
                      return <li key={idx}>
                        <Avatar shape="square" size={100} icon="user" />
                        <span class="shiledName">{child.name}</span>
                      </li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Shiled

