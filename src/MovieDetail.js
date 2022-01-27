import React from 'react';

export default function MovieDetail({ details }) {
  return <div className='single-movie'>
    {
      details.map((movie, i) => <div key={`${movie.name}-${i}`}>
        <p key={`${movie.genre}-${i}`}> {movie.name} {movie.year} </p>
        <img key={`${movie.year}-${i}`} src={movie.img} /> </div>) 
    }
  </div>;
}
