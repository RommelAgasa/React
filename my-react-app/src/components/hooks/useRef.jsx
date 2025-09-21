/**
 * The useRef Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It can be used to access a DOM element directly.
 */

// useRef() only returns one item. It returns an Object called current.
// The useRef Hook is often used to access DOM elements directly.


// The useRef Hook can also be used to keep track of previous state values.

import { useState, useRef, useEffect } from 'react';

export default function UseRefExample(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0); // avoid re-rendering when this value changes
    // const count = {current: 0}

    const inputElement = useRef();

    const prev = useRef("");

    useEffect(() => {
        count.current = count.current + 1;
        prev.current = inputValue;
    }, [inputValue])

    return (
        <>
            <p>Type in the input field: </p>
            <input type="text"
                ref={inputElement}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {prev.current}</h2>
            <br />
            <button onClick={() => inputElement.current.focus()}>Focus Input</button>
        </>
    )
}