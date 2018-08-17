import React, { Component } from 'react'
import CardItem from '../../components/cardItem/index.jsx'
import { Icon } from 'antd'
import './index.less'
class Topic extends Component {
  state = {
    myTopics: [
      '互联网', 
      '前端开发', 
      '消费电子产品',
      '黑客 (Hacker)',
      '前端工程师',
      '悬疑',
      '恐怖',
      '计算机科学',
      '鬼',
      '前端性能优化',
      '惊悚',
      '浏览器兼容性',
      '医学',
      '搞笑',
      '悬疑惊悚故事',
      'React',
      'Vue.js',
      'React Native'
    ],
    chooseIndex: 0,
    topicData: [
      {
        comeFrom: '热门内容, 来自: 数据库',
        nickname: '小侯飞氘',
        education: '中国科学技术大学 麦吉尔大学 凝聚态物理博士在读',
        cardHd: '打字速度对编程的影响大吗？',
        cardPhoto: require('../../assets/cardPhoto.jpg'),
        cardTxt: '很多人以为程序员大部分时间都在码代码、敲命令，反正就是对着RGB机械键盘各种怼。 实际上，程序员的日常是： 逗逼老板又让我实现xxx功能，还是搜一下有没有现成的轮子好了。然后开浏览器准备上google，忽…',
        eye: 11102,
        comments: 987,
        collected: false,
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
  changeTopic = (chooseIndex) => {
    this.setState({
      chooseIndex
    })
  }
  render() {
    return (
      <div className="topic">
        <div className="topicTitle">
          <Icon type="profile"></Icon>
          <span>已关注的话题动态</span>
        </div>
        <div className="tabHd">
          {
            this.state.myTopics.map((item,index) => {
              return <span className={this.state.chooseIndex === index ? 'actived' : ''} onClick={() => this.changeTopic(index)} key={index}>{item}</span>
            })
          }
        </div>
        <div className="tabBd">
          {
            this.state.topicData.map((item,index) => {
              return <CardItem cardData = {item}  key={index} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Topic
