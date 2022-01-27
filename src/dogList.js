import React from 'react';
import Dog from './Dog';
export default function dogList(props) {
  return <div>
    {
      props.dogs.map((dog, i) => <Dog key={`${dog.name}-${i}`} {...dog}/>)
    }
  </div>;
}

