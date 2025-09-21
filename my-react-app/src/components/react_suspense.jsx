/**
 * Suspense is a React feature that lets your 
 * components display an alternative HTML while 
 * waiting for code or data to load.
 */

import { Suspense, lazy } from "react";

const Fruits = lazy(() => import("./fruits"));

// lazy() lets you load a component dynamically
// Suspense shows a fallback while the component loads

function Loading(){
    return <div>Loading...</div>
}

function LazyLoading(){
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <Fruits />
            </Suspense>
        </div>
    );
}

export default LazyLoading;