import React, { Component, PropTypes } from 'react';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

import './App.css';



class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };


  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}


export default App
