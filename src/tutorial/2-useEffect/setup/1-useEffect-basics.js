import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);


  // useEffect(()=>{
  //   console.log('call useEffect');
  //   // if can't use outside of the useeffect but inside
  //   if(value > 1) {
  //     document.title = `New Message(${value})`;
  //   }
  // }) // will rin every time it redenr
//===========================================
  // useEffect(()=>{
  //   console.log('call useEffect');
  //   if(value > 1) {
  //     document.title = `New Message(${value})`;
  //   }
  // },[]) // empty array, will only run once on the initial render

  // console.log('render outside component');
//===========================================
    useEffect(()=>{
      console.log('call useEffect');
      if(value > 1) {
        document.title = `New Message(${value})`;
      }
    },[value]) // it will run the useEffect everytime when the value changes
    console.log('render outside component');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
