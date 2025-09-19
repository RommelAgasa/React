import { createRoot } from 'react-dom/client'
import React from 'react';
import Car from './components/car';
import Bike from './components/bike';
import Umbrella from './components/props';
import Garage from './components/garage';

import Car_ClassComponent from './components/class_components';

import Header from './components/header_constructor';

// function handleUmbrellaClick(){
//   alert("Umbrella closed!");
// }

createRoot(document.getElementById('root')).render(
  // <Umbrella 
  //   color="red"
  //   size="large"
  //   price={29.99}
  //   isOpen={true}
  //   features={["foldable", "windproof", "UV protection"]}
  //   onlClick={handleUmbrellaClick}
  // />


  // <Garage />


  // <Car_ClassComponent model="Mustang"/>

  <Header favcol="red"/>
)