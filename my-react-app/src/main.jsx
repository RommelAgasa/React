import { createRoot } from 'react-dom/client'
import React from 'react';

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
)

const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');



function kwtohp(kw){
  return kw * 1.36;
}


function Car(){
  
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  }
  
  return (
    <>
      {/* <h2>My Car</h2>
      <p>It is a Ford Mustang</p>
      <p>It has {kwtohp(218)} horsepower </p> */}

      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}.</h1>
    </>
  );
}


createRoot(document.getElementById('root')).render(
  <Car/>
)