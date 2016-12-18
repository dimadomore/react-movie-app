import React, { Component } from 'react';


class MoviesPage extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      movie: {title: ""}
    };
  }

  onTitleChange(event) {
    const movie = this.state.movie;
    movie.title = event.target.value;
    this.setState({ movie: movie });
  }

  onClickSave() {
    alert("Added");
  }

  render() {
    return (
      <div className="content">
        <h1>All movies</h1>
        <h2>здесь будут фильмы</h2>

      </div>
    )
  }
}

export default MoviesPage
