import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPeople] = useState({
    name: 'Chloe',
    age: '18',
    message: 'Hey'
  });
  return (
    <div>
      <h3>{}</h3>
    </div>
  );
};

export default UseStateObject;
