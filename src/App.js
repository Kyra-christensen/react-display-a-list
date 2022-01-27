import logo from './logo.svg';
import './App.css';
// import your arrays here
import { planetNames } from './planet-names';
import PlanetNameList from './PlanetNameList';

import { dogArray } from './dog-array';
import DogList from './DogList';

import { Animals } from './animal-aray';
import AnimalList from './AnimalList';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <PlanetNameList planetNames={planetNames} />
      <DogList dogs={dogArray} />
      <AnimalList animals={Animals} />
    </div>
  );
}

export default App;
