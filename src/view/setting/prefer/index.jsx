import React, { Component } from 'react'
import './index.less'

import SettingHd from '../../../components/settingHd'
import SettingItem from '../../../components/settingItem'

class Prefer extends Component {
  state = {
    shiledData: [
      {
        title: '图片水印',
        tips: '在我上传的图片上显示水印'
      }
    ]
  }
  render() {
    return (
      <div className="prefer">
        <SettingHd
          settingTit="偏好设置"
          settingTips={['图片水印']}
        ></SettingHd>
        <div className="preferCont">
          {
            this.state.shiledData.map((item, index) => {
              return <SettingItem key={index} title={item.title} tips={item.tips}></SettingItem>
            })
          }
        </div>
      </div>
    )
  }
}

export default Prefer
