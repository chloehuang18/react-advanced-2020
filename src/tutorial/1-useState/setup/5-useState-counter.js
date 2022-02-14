import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    // receive 1. a call back function, 2. a time in millionseconds
    setTimeout(()=>{
      setValue((prevState) => {
        return prevState + 1 
      });
      // setValue(value + 1); // no matter how many times you click it will only increase once bc it's always get the same value
    }, 2000)
  }
  return (
    <div>
      <section>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
        <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button className='btn' onClick={() => setValue(0)}>Reset</button>
      </section>
      <section style={{margin: '4rem 0'}}> 
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase</button>
      </section>
    </div>
  );
};

export default UseStateCounter;
