import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less'
class Message extends Component {
  state = {
    switchHd: ['系统提示','邀请回答'],
    switchIndex: 0,
    msgData:[
      {
        tit: '如果在硕士阶段学习机器学习，该如何规划？',
        meta: '邀请回答',
        resolve: '7个回答',
        attention: '327人关注'
      },
      {
        tit: '请问有人知道香港理工大学研究生申请要求是什么吗，有没有软件设计方向的专业？',
        meta: '邀请回答',
        resolve: '还没人回答',
        attention: '327人关注'
      },
      {
        tit: '如何评价How Scale Affects Structure in Java Programs？',
        meta: '系统提示',
        resolve: '',
        attention: ''
      }
    ]
  }
  handleSwitch = (index) => {
    this.setState({switchIndex:index})
  }
  goMsgDetail(){
  }
  deleteMsg = (index) => {
    let msgData2 = this.state.msgData
    msgData2.splice(index,1)
    this.setState({msgData:msgData2})
  }
  render() {
    return (
      <div className="messagePage">
        <div className="switchHd">
          {
            this.state.switchHd.map((item,index) => {
              return <span key={index} className={this.state.switchIndex === index ? 'actived' : ''} onClick={() => this.handleSwitch(index)}>{item}</span>
            })
          }
        </div>
        <div className="switchBd">
          {
            this.state.msgData.map((item,index) => {
              return (
                <div className="messageItem" key={index}>
                  <div className="msgInfo">
                    <h2 className="tit">
                      <a onClick={this.goMsgDetail()}>{item.tit}</a>
                    </h2>
                    <p className="meta">
                      <span>{item.meta}</span>
                      <span>{item.resolve}</span>
                      <span>{item.attention}</span>
                    </p>
                  </div>
                  <Button className="ignore" onClick={() => this.deleteMsg(index)}>忽略</Button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Message
