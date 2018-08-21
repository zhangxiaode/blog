import React, { Component } from 'react'
import './index.less'
class TextChat extends Component {
  state = {
    chatList: [
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '美食爱好者',
        num: 1233,
        tips: '自由畅聊，文明发言'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '电影一起聊',
        num: 3626,
        tips: '自由畅聊，文明发言'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '音乐一起听',
        num: 4323,
        tips: '自由畅聊，文明发言'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '读一本好书',
        num: 233,
        tips: '自由畅聊，文明发言'
      }
    ]
  }
  render() {
    return (
      <div className="textChat">
        <div className="textChatHd">欢迎来到自由世界</div>
        <div className="textChatBd">
          {
            this.state.chatList.map((item,index) => {
              return <div className="textChatItem" key={index}>
                <img className="chatImg" src={ item.chatImg } alt=""/>
                <div className="describe">
                  <h2>{ item.chatName }</h2>
                  <p>当前人数：{ item.num }</p>
                  <p>{ item.tips }</p>
                </div>
                <a className="chatBtn" href="">进入社区</a>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default TextChat
