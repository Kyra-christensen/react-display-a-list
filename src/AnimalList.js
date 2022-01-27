import React from 'react';
import Animal from './Animal';

export default function AnimalList(props) {
  return <div>
    {
      props.animals.map((animal, i) =>
        <Animal key={`${animal.type}-${i}`} {...animal}/>)
    }
  </div>;
}