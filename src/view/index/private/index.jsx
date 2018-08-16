import React, { Component } from 'react';
import { Button, Avatar, Modal, Input, Icon } from 'antd';
import './index.less'
const { TextArea } = Input;
class App extends Component {
  state= {
    sendMsgDialog: false,
    showReturn: false,
    msgList: [
      {
        msgName: '此世铭源',
        msgCont: '嗨，在吗？昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        privateDate: '1月17日 11:38',
        showReturn: false
      },
      {
        msgName: '世福',
        msgCont: '干啥呢？昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        privateDate: '2月18日 2:13',
        showReturn: false
      },
      {
        msgName: '张俊',
        msgCont: '一起去玩儿啊，昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        privateDate: '4月17日 22:15',
        showReturn: false
      },
      {
        msgName: '雄雄',
        msgCont: '在不？约起来啊，昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        privateDate: '6月17日 11:12',
        showReturn: false
      }
    ],
    friendsList: [],
    friendInput: ''
  }
  showModal = () => {
    this.setState({
      sendMsgDialog: true,
    })
  }
  closeModal = () => {
    this.setState({
      sendMsgDialog: false,
    })
  }
  sendMsg = () => {
    this.setState({
      sendMsgDialog: false,
    })
  }
  returnMsg = (index) => {
    let msgList = this.state.msgList
    msgList[index].showReturn = !msgList[index].showReturn
    this.setState({ msgList })
  }
  onChangeUserName = (e) => {
    this.setState({ friendInput: e.target.value })
  }
  addFriend = () => {
    let friendsList = this.state.friendsList
    friendsList.push(this.state.friendInput)
    this.setState({ 
      friendsList,
      friendInput: '' 
    })
  }
  removeFriend = (index) => {
    let friendsList = this.state.friendsList
    friendsList.splice(index,1)
    this.setState({ 
      friendsList
    })
  }
  getFocus = ()=>{
    this.refs.friendInput.focus()
  }
  render() {
    return (
      <div className="private">
        <div className="privateHd">
          <span>最近联系</span>
          <Button type="primary" onClick={this.showModal}>写私信</Button>
        </div>
        <div className="privateBd">
          {
            this.state.msgList.map((item,index) => {
              return <div className="privateItem" key={index}>
                <Avatar shape="square" size={100} icon="user" />
                <div className="privateMsg">
                  <div className="msgName">{item.msgName}:</div>
                  <div className="msgCont">{item.msgCont}</div>
                  <div className="privateInfo">
                    <div className="privateDate">{item.privateDate}</div>
                    <div className="privateBtn">
                      <Button type="primary">显示全部</Button>
                      <Button type="primary" onClick={() => this.returnMsg(index)}>回复</Button>
                      <Button type="default">删除</Button>
                    </div>
                  </div>
                  <div className={item.showReturn ? 'returnMsg showReturn' : 'returnMsg'}>
                    <TextArea rows={4} />
                    <div className="returnBtn">
                      <Button type="primary">发送</Button>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <Modal
          title="写私信"
          visible={this.state.sendMsgDialog}
          onOk={this.sendMsg}
          onCancel={this.closeModal}
          
          footer={[
            <Button key="close" onClick={this.closeModal}>取消</Button>,
            <Button key="send" type="primary" onClick={this.sendMsg}>发送</Button>
          ]}
        >
          <div className="friends" onClick={this.getFocus}>
            {
              this.state.friendsList.map((item,index) => {
                return <span key={index}>{item}<Icon className="close" type="close" onClick={() => this.removeFriend(index)}></Icon></span>
              })

            }
            <Input placeholder="用户名" ref="friendInput" value={this.state.friendInput} onChange={this.onChangeUserName} onPressEnter = {this.addFriend} />
          </div>
          <TextArea rows={4} />
        </Modal>
      </div>
    );
  }
}

export default App;
