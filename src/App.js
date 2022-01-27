import logo from './logo.svg';
import './App.css';
// import your arrays here
import { planetNames } from './planet-names';
import PlanetNameList from './PlanetNameList';

import { dogArray } from './dog-array';
import DogList from './List';

import { Animals } from './animal-array';
import AnimalList from './AnimalList';

import { MoviesArray } from './movies-array';
import MovieList from './MovieList';

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
