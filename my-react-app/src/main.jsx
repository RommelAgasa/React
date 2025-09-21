
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
import Football from './components/form/react_events';
import Goal from './components/conditional_rendering';
import MyCars from './components/list';
import MyForm from './components/form/react_form';
import MyFormWithCheckbox from './components/form/form_chckbx';
import MyFormWithRadio from './components/form/radio';
import MyApp from './components/modal_portal';


// Day 3
import LazyLoading from './components/react_suspense';
import AppCss from './components/css/myapp';
import AppRouter from './components/router/react_router';
import AppNestedRoute from './components/router/nested_route';
import AppUseParams from './components/router/router_parameters';
import AppUseTransition from './components/react_transitions';
import AppForwardRef from './components/react_forwardRef';
import AppHOC from './components/react_hoc';
import TimerUseEffect from './components/hooks/useEffect';
import Component1 from './components/hooks/useContext';

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
  // <Parent />
  // <Football/>
  // <Goal isGoal={true} brand="Mustang"/>
  // <MyCars/>
  // <MyForm/>
  // <MyFormWithCheckbox />
  // <MyFormWithRadio />
  // <MyApp />


  // <LazyLoading/>
  // <AppCss/>
  // <AppRouter/>
  // <AppNestedRoute />
  // <AppUseParams />
  // <AppUseTransition />
  // <AppForwardRef />
  // <AppHOC />
  // <TimerUseEffect />
  <Component1 /> // useContext
)