import React, { Component } from 'react'
import './index.less'

import CardItem from '../../components/cardItem/index.jsx'

class Collections extends Component {
  state = {
    collectData: [
      {
        comeFrom: '热门内容, 来自: 数据库',
        nickname: '小侯飞氘',
        education: '中国科学技术大学 麦吉尔大学 凝聚态物理博士在读',
        cardHd: '打字速度对编程的影响大吗？',
        cardPhoto: require('../../assets/cardPhoto.jpg'),
        cardTxt: '很多人以为程序员大部分时间都在码代码、敲命令，反正就是对着RGB机械键盘各种怼。 实际上，程序员的日常是： 逗逼老板又让我实现xxx功能，还是搜一下有没有现成的轮子好了。然后开浏览器准备上google，忽…',
        eye: 11102,
        comments: 987,
        collected: true,
        like: false
      },
      {
        comeFrom: '热门内容, 来自: 数据库',
        nickname: '小侯飞氘',
        education: '中国科学技术大学 麦吉尔大学 凝聚态物理博士在读',
        cardHd: '打字速度对编程的影响大吗？',
        cardPhoto: require('../../assets/cardPhoto.jpg'),
        cardTxt: '很多人以为程序员大部分时间都在码代码、敲命令，反正就是对着RGB机械键盘各种怼。 实际上，程序员的日常是： 逗逼老板又让我实现xxx功能，还是搜一下有没有现成的轮子好了。然后开浏览器准备上google，忽…',
        eye: 11102,
        comments: 987,
        collected: true,
        like: true
      }
    ]
  }
  render() {
    return (
      <div className="collections">
        <div className="colleHd">我的收藏</div>
        <div className="collBd">
          {
            this.state.collectData.map((item,index) => {
              return <CardItem cardData = {item}  key={index} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Collections
