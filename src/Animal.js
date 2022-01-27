import React from 'react';

export default function Animal({
  type,
  child,
}) {
  return <div className='animal-item'>
    <p>A {type}&apos;s offspring is called: </p>
    <div className='animal-child'>
      <p>A {child.called}.</p>
    </div>
  </div>;
}