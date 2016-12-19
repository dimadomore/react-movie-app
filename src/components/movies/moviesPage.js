import React, { Component } from 'react';
//let API_KEY = "65be0a1a36573b73fbd9c46004e6e0b2";

// const fetchMovies = () => {
//   return () => {
//         fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
//           .then(res => res.json())
//           .then(({results}) => {
//             let searchResults = results.map(({id, poster_path, title}) => (
//               {
//                 id,
//                 poster_path,
//                 title
//               }
//             ));
//           })
//           console.log(searchResults)
//           .catch(e => e.message)
//   }
// };

class MoviesPage extends Component {


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
