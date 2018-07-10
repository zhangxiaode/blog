import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
class App extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="sideBar">
          <div className="categoryList">
            <Link to="/">消息提醒</Link>
            <Link to="/">写文章</Link>
            <Link to="/">留言板</Link>
            <Link to="/">私信</Link>
          </div>
          <div className="card">
            <Link to="/">收藏文章</Link>
            <Link to="/">收藏社区</Link>
            <Link to="/">我的关注</Link>
            <Link to="/">关注我的</Link>
          </div>
        </div>
        <div className="content">
          this is content
        </div>
      </div>
    );
  }
}

export default App;
