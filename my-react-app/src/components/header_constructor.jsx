import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { favoritecolor: "red"};
    }

    // called right before rendering the element(s) in the DOM.
    // static getDerivedStateFromProps(props, state){
    //     if(state.favoritecolor !== props.favcol){
    //         return {favoritecolor: props.favcol};
    //     }
    //     return null;
    // }

    // kinoment ko yung nasa taas kase
    // d gumagana yung componenDidMount


    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = 
        "Before the update, the favorite color was " + 
        prevState.favoritecolor;
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        "The updated favorite color is " + 
        this.state.favoritecolor;
    }

    render(){
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }


    // called after the component is rendered.
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000);
    }
}

export default Header;