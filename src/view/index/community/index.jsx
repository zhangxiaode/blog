import React, { Component } from 'react'
import CommItem from '../../../components/commItem/index.jsx'
import './index.less'
class Community extends Component {
  state = {
    commList: [
      {
        commName: '金风社区',
        commIntro: '社区介绍',
        owner: '金风凝香',
        createDate: '2018/08/18 14:30',
        people: 1032,
        articles: 6032
      },
      {
        commName: '金风社区',
        commIntro: '社区介绍',
        owner: '金风凝香',
        createDate: '2018/08/18 14:30',
        people: 1032,
        articles: 6032
      },
      {
        commName: '金风社区',
        commIntro: '社区介绍',
        owner: '金风凝香',
        createDate: '2018/08/18 14:30',
        people: 1032,
        articles: 6032
      },
      {
        commName: '金风社区',
        commIntro: '社区介绍',
        owner: '金风凝香',
        createDate: '2018/08/18 14:30',
        people: 1032,
        articles: 6032
      }
    ]
  }
  render() {
    return (
      <div className="community">
        {
          this.state.commList.map((item,index) => {
            return <CommItem commData = {item}  key={index} />
          })
        }
      </div>
    )
  }
}

export default Community
