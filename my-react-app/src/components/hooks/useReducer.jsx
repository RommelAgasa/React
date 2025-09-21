/**
 * The useReducer Hook is similar to the useState Hook.
 * It allows for more complex state logic in a component.
 * It is usually preferable to use useState for simpler state logic.
 * It is used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
 * It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
 */

import { useReducer } from 'react';

const initialScore = [
    {
        id: 1,
        score: 0,
        name: 'John'
    },
    {
        id: 2,
        score: 0,
        name: 'Sally'
    },
];

/**
 * A reducer is just a function that:
 *    takes the current state and an action,
 *    decides how to update the state based on that action,
 *    and returns the new state.
 * 
 * 
    state + action → new state
 */
const reducer = (state, action) => {

    switch(action.type){
        case "INCREASE":
            return state.map((player) => {
                if( player.id == action.id) {
                    return { ...player, score: player.score + 1}
                }
                return player;
            });
        default:
            return state;
    };
};


export default function Score_useReducer(){
    const[score, dispatch] = useReducer(reducer, initialScore);

    const handleIncreaseScore = (player) => {
        // dispatch -> function you call to send an action to the reducer.
        dispatch({ type: "INCREASE", id:player.id }); // tells reducer how to update
    }

    return (
        <>
            {score.map((player) => (
                <div key={player.id}>
                    <label>
                        <input type="button"
                        onClick={() => handleIncreaseScore(player)} 
                        value={player.name}/>
                        {player.score}
                    </label>
                </div>
            ))}
        </>
    );
}

