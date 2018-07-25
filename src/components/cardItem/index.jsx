import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import './index.less';

class CardItem extends Component {
  state = {
    cardData: this.props.cardData,
    collected: this.props.cardData.collected,
    like: this.props.cardData.like
  }
  changeStatus(status,key) {
    if(key==='collected'){
      this.setState({collected:!status})
    } else if(key==='like'){
      this.setState({like:!status})
    }
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
          <span onClick = {() => this.changeStatus(this.state.collected,'collected')}><Icon type={this.state.collected ? 'star' : 'star-o'} />收藏</span>
          <span onClick = {() => this.changeStatus(this.state.like,'like')}><Icon type={this.state.like ? 'heart' : 'heart-o'} />喜欢</span>
        </div>
      </div>
    )
  }
}
export default CardItem
