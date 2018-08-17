import React, { Component } from 'react';
import FocusItem from '../../../components/focusItem/index.jsx'
import './index.less'
class FocusMe extends Component {
  state = {
    focusList: [
      {
        user: '林小志',
        instr: '学习玩前端的小鸟，但不愤怒……',
        answer: 432,
        articals: 33,
        focus: 43221
      },
      {
        user: '李玉北',
        instr: '前端工程师',
        answer: 466,
        articals: 233,
        focus: 22342
      },
      {
        user: 'Dexter.Yy',
        instr: 'JS黑客，GUI大法师，WebApp工匠，虚拟世界建筑师，奇幻科幻PC游戏动漫宅',
        answer: 33,
        articals: 543,
        focus: 3332
      }
    ]
  }
  render() {
    return (
      <div className="focusMe">
        {
          this.state.focusList.map((item,index) => {
            return <FocusItem focusData={item} key={index}></FocusItem>
          })
        }
      </div>
    )
  }
}

export default FocusMe
