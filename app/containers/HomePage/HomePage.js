import React from 'react';
import Header from '../../components/Header';
import MovieContainer from '../../components/MovieContainer';
import './style.scss';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <MovieContainer />
    </div>
  );
}

export default HomePage;
