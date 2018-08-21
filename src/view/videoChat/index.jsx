import React, { Component } from 'react'
import './index.less'
class VideoChat extends Component {
  state = {
    chatList: [
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '美食爱好者'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '电影一起聊'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '音乐一起听'
      },
      {
        chatImg: require('../../assets/cardPhoto.jpg'),
        chatName: '读一本好书'
      }
    ]
  }
  render() {
    return (
      <div className="videoChat">
        <div className="videoChatHd">欢迎来到自由世界</div>
        <div className="videoChatBd">
          {
            this.state.chatList.map((item,index) => {
              return <div className="videoChatItem" key={index}>
                <img className="chatImg" src={ item.chatImg } alt=""/>
                <p>{ item.chatName }</p>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default VideoChat
