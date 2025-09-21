
// The useEffect Hook allows you to perform side effects in your components.

import { useState, useEffect } from 'react';

export default function TimerUseEffect(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count + 2);
    }, [count]); //(dependency array) <- add the count variable here

    /**
     * The [count] tells React:
     *  Only re-run the effect if count changes
     */

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );

    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount(c => c + 1);
    //     }, 1000);
    //     return () => clearTimeout(timer); // <- this is important to clear the timer
    // }, []); // <- add the empty array here so the effect runs only once

    // return <h1>I have rendered {count} times!</h1>;
}
