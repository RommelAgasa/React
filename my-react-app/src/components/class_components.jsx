import React from 'react';


class Car_ClassComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            color: "red",
            brand: "Ford",
            year: 1964,
            model: props.model
        };
    }

    changeColor = () => {
        /**
         * Always use the setState() method to 
         * change the state object, it will 
         * ensure that the component knows its 
         * been updated and calls the render() 
         * method (and all the other lifecycle methods).
         */
        this.setState({color: "blue"});
    }

    render(){
        // return <h2>Hi, I am a {this.state.color} Car!</h2>;

        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}                    
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >
                    Change color
                </button>
            </div>
        );
    };
}


export default Car_ClassComponent;