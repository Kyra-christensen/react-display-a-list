import logo from './logo.svg';
import './App.css';
// import your arrays here
import { planetNames } from './Planets/planet-names';
import PlanetNameList from './Planets/PlanetNameList';

import { dogArray } from './Dogs/dog-array';
import DogList from './Dogs/DogList';

import { Animals } from './Animals/animal-array';
import AnimalList from './Animals/AnimalList';

import { MoviesArray } from './Movies/movies-array';
import MovieList from './Movies/MovieList';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <PlanetNameList planetNames={planetNames} />
      <DogList dogs={dogArray} />
      <AnimalList animals={Animals} />
      <MovieList movies={MoviesArray} />
    </div>
  );
}

export default App;
