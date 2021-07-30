/** @format */

import './App.css';
import { Navbar } from './components/Navbar';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './services/routes';
import { MoviesPage, MoviesDetailsPage, HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />;
      <Switch>
        <Route exact path={routes.Home} component={HomePage} />
        <Route path={routes.MoviesDetails} component={MoviesDetailsPage} />
        <Route path={routes.Movies} component={MoviesPage} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
