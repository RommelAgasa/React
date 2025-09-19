function Umbrella({color, size, price, isOpen, features, onlClick}){
    return (
        <div>
            <h2>
                I am a {color} umbrella, size {size}.
            </h2>
            <p>Price: ${price}</p>
            <p>Status: {isOpen? "Open" : "Closed"}</p>
            <p>Features: {features.join(", ")}</p>
            <button onClick={onlClick}>Click me</button>
        </div>
    )
}

export default Umbrella;