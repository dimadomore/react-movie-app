import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto assumenda blanditiis consequuntur, doloribus ducimus enim explicabo magnam maiores nemo odio officia, placeat quia suscipit tempore ullam ut voluptatibus?</p>
        {/*<Link to="/celebs">go to celebs</Link> */}
      </div>
    )
  }
}


export default HomePage
