import React from 'react';
import MovieDetail from './MovieDetail';

export default function Movie({
  genre,
  movie
}) {
  return <div className='movie-item'>
    <p>Movies in the {genre} genre:</p>
    <div className='movie'>
      <MovieDetail details={movie}/>
    </div>
  </div>;
}

