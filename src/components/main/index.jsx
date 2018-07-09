import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.less';
import Page from '../../view/page/index.jsx';
import Page2 from '../../view/page2/index.jsx';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Route path="/layout/page" component={Page} />
          <Route path="/layout/page2" component={Page2} />
        </div> 
      </div>
    );
  }
}

export default Main;
