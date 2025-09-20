// function Football() {
//     const shoot = () => {
//         alert("Great Shot!");
//     }

//     return (
//         <button onClick={shoot} >Take the shot!</button>
//     );
// }


// function Football(){
//     const shoot = (a) => {
//         alert(a);
//     }

//     return (
//         <button onClick={() => shoot("Goal!")} >Take the shot!</button>
//     );
// }


function Football(){
    const shoot = (a, b) => {
        alert(b.type);
        /**
         *  'b' represents the React event that triggered the function,
         *  in this case the 'click' event
         */
    };

    return(
        <button onClick={
            (event) => shoot("Goal!", event)
        } >Take the shoot!</button>
    );
}

export default Football;