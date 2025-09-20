function MissedGoal(){
    return <h1>MISSED!</h1>
}

function MadeGoal(){
    return <h1>GOAL!</h1>
}


function Goal(props){
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    );
}


// function Goal(props){
//     return (
//         <>
//             {props.brand && <h1>My car is a {props.brand}</h1>}
//         </>
//     );
// }

export default Goal;