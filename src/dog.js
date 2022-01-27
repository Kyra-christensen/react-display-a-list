import React from 'react';

export default function Dog({
  name,
  breed,
  behavior,
  img
}) {
  return <div className='dogList'>
    <p>This is {name}. They are a {breed}, and they can sometimes be {behavior}</p>
    <img src={img} />
  </div>;
}

