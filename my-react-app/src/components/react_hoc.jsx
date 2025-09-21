/**
 * A Higher Order Component (HOC) is like a 
 * wrapper that adds extra features to your 
 * React components. Think of it like putting 
 * a case on your phone - the case adds new 
 * features (like water protection) without 
 * changing the phone itself.
 */

// so the function needs to return JSX or a component
function withBorder(WrappedComponent){
    return function NewComponent(props){
        return(
            <div style={ {border: '2px solid blue', padding: '10px'} }>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

// Simple component without border
function Greeting({name}){
    return <h1>Hello, {name}!</h1>;
}

// Create new component with border using HOC
const GreetingWithBorder = withBorder(Greeting);

export default function AppHOC(){
    return (
        <div>
            <Greeting name="John"/>
            <GreetingWithBorder name="Jane"/>
        </div>
    )
}