import React, { Component } from 'react'
import CardItem from '../../../components/cardItem/index.jsx'
import './index.less'
class Artical extends Component {
  state = {
    cardData: [
      {
        comeFrom: '热门内容, 来自: 前端家族',
        nickname: '金风凝香',
        education: '河南理工大学',
        cardHd: '前端究竟要学些什么？',
        cardPhoto: require('../../../assets/cardPhoto.jpg'),
        cardTxt: '反正就是对着RGB机械键盘各种怼。 实际上，程序员的日常是： 逗逼老板又让我实现xxx功能，还是搜一下有没有现成的轮子好了。然后开浏览器准备上google，忽…',
        eye: 2102,
        comments: 2987,
        collected: true,
        like: false
      },
      {
        comeFrom: '热门内容, 来自: Android开发',
        nickname: '此世铭源',
        education: '河南理工大学',
        cardHd: 'Android开发的几大误区',
        cardPhoto: require('../../../assets/cardPhoto.jpg'),
        cardTxt: '实际上，程序员的日常是： 逗逼老板又让我实现xxx功能，还是搜一下有没有现成的轮子好了。然后开浏览器准备上google，忽略了项目的进度',
        eye: 402,
        comments: 287,
        collected: true,
        like: true
      }
    ]
  }
  render() {
    return (
      <div className="artical">
        {
          this.state.cardData.map((item,index) => {
            return <CardItem cardData = {item}  key={index} />
          })
        }
      </div>
    );
  }
}

export default Artical
