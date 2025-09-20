// function Car_Props_Destructuring(props){
//     const {brand, model} = props;
//     return (
//         <h2>I love my {brand} {model} </h2>
//     )
// }

function Car_Props_Destructuring(
    {
        color = "yellow",
        brand,
        ... rest
    }
)
{
    return (
        <h2>My {brand} {rest.model} is {color}</h2>
    );
}

export default Car_Props_Destructuring;