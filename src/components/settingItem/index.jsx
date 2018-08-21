import React, { Component } from 'react'
import './index.less';

class SettingItem extends Component {
  render() {
    return (
      <div className="settingItem">
        <div className="settingTxt">
          <h2>{this.props.title}</h2>
          <p>{this.props.tips}</p>
        </div>
        <div className="settingBtn">
          <a href="">编辑</a>
        </div>
      </div>
    )
  }
}
export default SettingItem
