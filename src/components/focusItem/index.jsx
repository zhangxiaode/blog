import React, { Component } from 'react'
import { Avatar, Button } from 'antd'
import './index.less';

class FocusItem extends Component {
  state = {
    btnTxt: '已关注',
    focusData: this.props.focusData
  }
  changeStatus = () => {
    let btnTxt = this.state.btnTxt === '已关注' ? '取消关注' : '已关注'
    this.setState({
      btnTxt 
    })
  }
  render() {
    return (
      <div className="focusItem">
        <Avatar shape="square" size={200} icon="user" />
        <div className="focusCenter">
          <h2 className="focusUser">{this.state.focusData.user}</h2>
          <div className="focusInstr">{this.state.focusData.instr}</div>
          <div className="focusInfo">{this.state.focusData.answer} 回答 . {this.state.focusData.articals} 文章 . {this.state.focusData.focus} 关注者</div>
        </div>
        <Button type="primary" onMouseOver={this.changeStatus} onMouseOut={this.changeStatus}>{this.state.btnTxt}</Button>
      </div>
    )
  }
}
export default FocusItem
