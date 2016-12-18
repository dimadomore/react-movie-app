import React, { Component, PropTypes } from 'react';
import Header from "./common/Header";

import '../styles/App.css';



class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };


  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    )
  }
}


export default App
