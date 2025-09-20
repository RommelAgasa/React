import { useState } from "react";

function MyForm(){
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
        car: "Volvo"
    });


    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,  // spread yung previous state (para hindi mawala yung ibang fields)
            [name]:value // dynamically set yung field base sa "name"
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Enter your Email: 
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                />
            </label>
            <br />
            <label>Write here: 
                <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>My Car: 
                <select 
                    name="car" 
                    value={formData.car} 
                    onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </label>

            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm;