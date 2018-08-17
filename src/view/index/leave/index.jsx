import React, { Component } from 'react'
import { Avatar } from 'antd'
import './index.less'
class Leave extends Component {
  state = {
    msgList: [
      {
        msgName: '此世铭源',
        msgCont: '嗨，在吗？昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        date: '1月17日 11:38'
      },
      {
        msgName: '世福',
        msgCont: '干啥呢？昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        date: '2月18日 2:13'
      },
      {
        msgName: '张俊',
        msgCont: '一起去玩儿啊，昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        date: '4月17日 22:15'
      },
      {
        msgName: '雄雄',
        msgCont: '在不？约起来啊，昨天找你，你不在，在这儿给你留言了，昨天说的那个事儿...',
        date: '6月17日 11:12'
      }
    ]
  }
  render() {
    return (
      <div className="leave">
        <div className="leaveHd">留言板</div>
        <div className="leaveBd">
          {
            this.state.msgList.map((item,index) => {
              return <div className="leaveItem" key={index}>
                <Avatar shape="square" size={100} icon="user" />
                <div className="leaveItemCont">
                  <div className="leaveName">{ item.msgName }:</div>
                  <div className="leaveMsg">
                    { item.msgCont }
                  </div>
                  <div className="leaveDate">{ item.date }</div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Leave
