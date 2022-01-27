import React from 'react';
import Movie from './Movie';
export default function MovieList(props) {
  return <div>
    {
      props.movies.map((movie, i) =>
        <Movie key={`${movie.genre}-${i}`} {...movie} />)
    }
  </div>;
}

