import { useState } from "react";

function MyFormWithRadio(){
    const [selectedFruit, setSelectedFruit] = useState('banana');

    const handleChange = (e) => {
        setSelectedFruit(e.target.value);
    };

    const handleSubmit = (e) => {
        alert(`Your favorite fruit is: ${selectedFruit}`);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Select your favorite fruit: </p>
            <label>
                <input type="radio"
                name="fruit"
                value="apple"
                checked={selectedFruit === 'apple'}
                onChange={handleChange} />
                Apple
            </label>
            <br />
            <label>
                <input type="radio" 
                name="fruit" 
                value="orange"
                checked={selectedFruit === 'orange'}
                onChange={handleChange} />
                Orange
            </label>
            <br />
            <label>
                <input type="radio"
                name="fruit"
                value="cherry"
                checked={selectedFruit === 'cherry'}
                onChange={handleChange} />
                Cherry
            </label>

            <br />
            <button type="submit">Submit</button>
        </form>
    )

}

export default MyFormWithRadio;