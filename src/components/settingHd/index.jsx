import React, { Component } from 'react'
import './index.less';

class SettingHd extends Component {
  render() {
    return (
      <div className="settingTitle">
        <h2>{this.props.settingTit}</h2>
        {
          this.props.settingTips.map((item,index) => {
            return <p key={index}>{item}</p>
          })
        }
        
      </div>
    )
  }
}
export default SettingHd
