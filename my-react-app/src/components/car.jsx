// function kwtohp(kw){
//   return kw * 1.36;
// }

function Car(props){
  
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

      <h1>My car is a {myobj.color} {myobj.name} {myobj.model} {props.brand}.</h1>
    </>
  );
}

export default Car;