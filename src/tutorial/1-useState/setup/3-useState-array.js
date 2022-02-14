import React, { useState } from 'react';
import { data } from '../../../data';

// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = (id) => {
//     // make a copy and pass all the ids that is not == to current id
//     let newPeople = people.filter((person)=> person.id !== id);
//     setPeople(newPeople);
//   }

//   return <>
//     {
//       people.map((person) => {
//         const {id, name} = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={()=> removeItem(id)}>Remove</button>
//           </div>
//         );
//       })
//     }
//     <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
//   </>
// };


// const UseStateArray = () => {
//   const [people, setPeople] = useState(data);

//   const removeItem = (id) => {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   }

//   return(
//     <>
//       {
//         people.map((person) => {
//           return (
//             <div key={person.id} className='item'>
//               <h4>{person.name}</h4>
//               <button onClick={() => removeItem(person.id)}>Remove</button>
//             </div>
//           );
//         })
//       }
//       <button className='btn' onClick={()=> setPeople([])}>Clear Item</button>
//     </>
//   );
// }

export default UseStateArray;
