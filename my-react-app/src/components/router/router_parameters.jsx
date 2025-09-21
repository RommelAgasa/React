import { BrowserRouter, Routes, Route, Link, useParams  } from "react-router-dom";

function Info(){
    const { firstname } = useParams();
    return  <h1>Hello, {firstname}!</h1>
}

function AppUseParams(){
    return (
        <BrowserRouter>
        {/* Navigation Links */}
        <nav>
            <Link to="/customer/Emil">Emil</Link> | {" "}
            <Link to="/customer/Tobias">Tobias</Link> | {" "}
            <Link to="/customer/Linus">Linus</Link>
        </nav>

        {/* Routes */}
        <Routes>
            <Route path="/customer/:firstname" element={<Info/>} />
        </Routes>

        </BrowserRouter>
    );
}

export default AppUseParams;