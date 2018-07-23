import React, { Component } from 'react';
import { connect } from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'

class Topic extends Component {
  render() {
    return (
      <div className="page">
        {this.props.text}
      </div>
    );
  }
}
Topic = connect(mapStateToProps, mapDispatchToProps)(Topic)

export default Topic;
