/*
    forwardRef lets your component pass a reference 
    to one of its children. 
    
    It's like giving a 
    direct reference to a DOM element inside your 
    component.
*/

import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

function AppForwardRef() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };


    return (
        <div>
            <MyInput ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput} >Focus Input</button>
        </div>
    )
}

export default AppForwardRef;