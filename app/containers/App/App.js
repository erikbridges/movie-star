/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="Movie Star" defaultTitle="Movie Star">
      <meta name="description" content="A React.js Movie application" />
    </Helmet>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
