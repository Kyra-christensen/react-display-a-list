import React from 'react';
import Dog from './Dog';

export default function DogList(props) {
  return <div className='dogDiv'>
    {
      props.dogs.map((dog, i) => <Dog key={`${dog.name}-${i}`} {...dog}/>)
    }
  </div>;
}

