import React, { Component } from 'react'
import FocusItem from '../../../components/focusItem/index.jsx'
import './index.less'
class MyFocus extends Component {
  state = {
    focusList: [
      {
        user: '一只鱼的传说',
        instr: '作家 代表作《黄河古道》《鬼藏人》',
        answer: 129,
        articals: 33,
        focus: 19057
      },
      {
        user: '狼叔',
        instr: '我们做不成富二代，做富二代他爹还是有希望的。',
        answer: 19,
        articals: 53,
        focus: 43257
      },
      {
        user: '方应杭',
        instr: '微信 xiedaimala02，公众号 XDML，暗号：知乎',
        answer: 453,
        articals: 356,
        focus: 23057
      },
      {
        user: 'Franky',
        instr: 'Think Different',
        answer: 349,
        articals: 23,
        focus: 22537
      }
    ]
  }
  render() {
    return (
      <div className="myFocus">
        {
          this.state.focusList.map((item,index) => {
            return <FocusItem focusData={item} key={index}></FocusItem>
          })
        }
      </div>
    )
  }
}

export default MyFocus
