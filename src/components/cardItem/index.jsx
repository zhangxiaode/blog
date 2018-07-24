import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import './index.less';

class CardItem extends Component {
  state = {
    cardData: this.props.cardData
  }
  changeStatus(status) {
    console.log(status)
    console.log(this.state.cardData.collected)
    status = !status
  }
  render() {
    return (
      <div className="cardItem">
        <div className="comeFrom">
          <p>{this.state.cardData.comeFrom}</p>
          <Icon type="close" />
        </div>
        <div className="userInfo">
          <Avatar shape="square" icon="user" />
          <span className="nickname">{this.state.cardData.nickname}</span>
          <span className="education">{this.state.cardData.education}</span>
        </div>
        <div className="cardHd">{this.state.cardData.cardHd}</div>
        <div className="cardBd">
          <div className="cardPhoto">
            <img src={this.state.cardData.cardPhoto} alt=""/>
          </div>
          <div className="cardTxt">
            {this.state.cardData.cardTxt}
          </div>
        </div>
        <div className="cardBtn">
          <span><Icon type="eye" />浏览{this.state.cardData.eye}次</span>
          <span><Icon type="message" />{this.state.cardData.comments}条评论</span>
          <span onClick = {() => this.changeStatus(this.state.cardData.collected)}><Icon type={this.state.cardData.collected ? 'star' : 'star-o'} />收藏</span>
          <span onClick = {() => this.changeStatus(this.state.cardData.like)}><Icon type={this.state.cardData.like ? 'heart' : 'heart-o'} />喜欢</span>
        </div>
      </div>
    )
  }
}
export default CardItem
