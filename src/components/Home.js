import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h4 >Welcome to React Hooks!</h4>
            <hr />
            <ul>
                <li><Link to="/usestate">useState</Link></li>
                <li><Link to="/useeffect">useEffect</Link></li>
            </ul>
        </>
    );
}

export default Home;
