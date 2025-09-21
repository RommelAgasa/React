import { useState, useTransition } from "react";


/**
 * Note: Use transitions only for non-urgent updates. 
 * For example, typing in an input field should be 
 * urgent, but filtering a large list can be a 
 * transition.
 */


function SearchResults({ query }) {
    // Simulate slow search results
    const items = [];
    if( query ){
        for(let i = 0; i < 1000; i++){
            items.push(<li key={i}> Result for {query} - {i}</li>)
        }
    }
    return <ul>{items}</ul>;
}

function AppUseTransition(){
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: update input field
        setInput(e.target.value);

        // Non-urgent: Update search results
        startTransition(() => {
            setQuery(e.target.value);
        });
    };

    return(
        <div>
            <input type="text"
            value={input} 
            onChange={handleChange}
            placeholder="Type to search..." 
            />
            {isPending && <p>Loading results....</p>}
            <SearchResults query={query} />
        </div>
    );
}


export default AppUseTransition;
