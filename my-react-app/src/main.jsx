
// Day 1
import { createRoot } from 'react-dom/client'
import React from 'react';
import Car from './components/car';
import Bike from './components/bike';
import Umbrella from './components/props';
import Garage from './components/garage';
import Car_ClassComponent from './components/components';
import Header from './components/class_components';


// Day 2
import Car_Props_Destructuring from './components/destructuring_props';
import Parent from './components/props_children';
import Football from './components/react_events';
import Goal from './components/conditional_rendering';
import MyCars from './components/list';

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

  // <Header favcol="red"/>

  // <Car_Props_Destructuring brand="Ford" model="Mustang" year="1969"/>
  //<Parent />
  // <Football/>
  // <Goal isGoal={true} brand="Mustang"/>
  <MyCars/>
)