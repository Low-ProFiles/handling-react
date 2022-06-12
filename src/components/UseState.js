import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import UseInput from "../UseState/UseInput";
import UseTabs from "../UseState/UseTabs";

function UseState() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h4 >useState</h4>
            <hr />
            <ul>
                <li><Link to="/usestate/useinput">UseInput</Link></li>
                <li><Link to="/usestate/usetabs">UseTabs</Link></li>
            </ul>
            <Routes>
                <Route path="/useinput" element={<UseInput />} />
                <Route path="/usetabs" element={<UseTabs />} />
            </Routes>
        </>
    );
}

export default UseState;
