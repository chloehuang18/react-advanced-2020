import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    //clean up function a good practice
    return () => {
      console.log('clean up');
      window.addEventListener('resize', checkSize);

    }
  },[]);

  console.log( 'render')

  return (
    <>
    <h1>Window</h1>
    <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
