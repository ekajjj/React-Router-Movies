import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div className="nav-links">
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/movies/">
          Movies
        </Link>
      </div>

      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} />} />
    </div>
  );
};

export default App;