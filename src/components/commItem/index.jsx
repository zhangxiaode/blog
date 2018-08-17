import React, { Component } from 'react';
import { Avatar } from 'antd';
import './index.less';

class CardItem extends Component {
  state = {
    commData: this.props.commData
  }
  render() {
    return (
      <div className="commItem">
        <div className="commHd">
          【{ this.state.commData.commName }】{ this.state.commData.commIntro }
        </div>
        <div className="commInfo">
          <div className="owner">
            <Avatar shape="square" size={100} icon="user" />
            <span className="ownerName">博主：{ this.state.commData.owner }</span>
          </div>
          <div className="createDate">
            创建时间：
            <span>{ this.state.commData.createDate }</span>
          </div>
          <div className="commCont">
            <span>人数：{ this.state.commData.people }</span>
            <span>文章：{ this.state.commData.articles }</span>
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem
