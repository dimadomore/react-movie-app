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
      <div>
        <h1>Movies</h1>
        <h2>Add Movie</h2>
        <input type="text"
               onChange={this.onTitleChange.bind(this)}
               value={this.state.movie.title}/>
        <button type="Submit"
                onClick={this.onClickSave.bind(this)}>Add to favorites
        </button>

      </div>
    )
  }
}

export default MoviesPage
