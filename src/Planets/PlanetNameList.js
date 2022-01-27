import React from 'react';
import PlanetName from './PlanetName';

export default function planetNameList(props) {
  return <div className='planet-list'>
    {props.planetNames.map((planetName, i) => <PlanetName key={`${planetName}-${i}`} name={planetName} />)}
  </div>;
}

