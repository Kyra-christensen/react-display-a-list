import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return <div className='movie-div'>
    {
      props.movies.map((movie, i) =>
        <Movie key={`${movie.genre}-${i}`} movie={movie.movie} genre={movie.genre}/>)
    }
  </div>;
}

