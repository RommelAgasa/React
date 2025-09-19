
function Bike(){
  const myFunc = () => {
    alert('Hello World');
  };

  const myStyles = {
    backgroundColor: "blue",
    padding: "24px",
    color: "white",
    border: "none",
  }

  return (
    <button style={myStyles} onClick={myFunc}>Click me</button>
  );

}


export default Bike;