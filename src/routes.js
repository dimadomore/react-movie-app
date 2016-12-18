import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/app/App";
import HomePage from "./components/home/HomePage";
import CelebsPage from "./components/celebs/CelebsPage";
import MoviesPage from "./components/movies/MoviesPage";
import ShowsPage from "./components/shows/ShowsPage";


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="movies" component={MoviesPage}/>
      <Route path="celebs" component={CelebsPage} />
      <Route path="shows" component={ShowsPage} />
    </Route>
);
