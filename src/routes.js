import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/celebs/celebsPage";
import MoviesPage from "./components/movies/moviesPage"

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="movies" component={MoviesPage}/>
      <Route path="about" component={AboutPage} />
    </Route>
);