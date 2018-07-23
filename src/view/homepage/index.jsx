import React, { Component } from 'react';
import { connect } from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'

class Homepage extends Component {
  componentDidMount(){
    this.props.onChangeText()
  }
  render() {
    return (
      <div className="page">
        this is homepage
      </div>
    );
  }
}
Homepage = connect(mapStateToProps, mapDispatchToProps)(Homepage)

export default Homepage;
