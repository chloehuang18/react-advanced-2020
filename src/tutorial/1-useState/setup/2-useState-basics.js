import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState('helo world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[0];
  // console.log(value, handler);
                      // = useState(default value)
  const [text, setText] = useState('random title');

  const handleClick = () => {
    // setText('helloooo world')
    if (text === 'random title') {
      setText('hello world');
    }else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='title' className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
    
  );
};

export default UseStateBasics;
