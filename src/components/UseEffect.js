import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import UseAxios from "../UseEffect/UseAxios";
import UseBeforeLeave from "../UseEffect/UseBeforeLeave";
import UseClick from "../UseEffect/UseClick";
import UseConfirm from "../UseEffect/UseConfirm";
import UseFadeIn from "../UseEffect/UseFadeIn";
import UseFullScreen from "../UseEffect/UseFullScreen";
import UseNetWork from "../UseEffect/UseNetWork";
import UseNotification from "../UseEffect/UseNotification";
import UsePreventLeave from "../UseEffect/UsePreventLeave";
import UseScroll from "../UseEffect/UseScroll";
import UseTitle from "../UseEffect/UseTitle";

function UseEffect() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h4 >useEffect</h4>
            <hr />
            <ul>
                <li><Link to="/useeffect/useaxios">UseAxios</Link></li>
                <li><Link to="/useeffect/usebeforeleave">UseBeforeLeave</Link></li>
                <li><Link to="/useeffect/useclick">UseClick</Link></li>
                <li><Link to="/useeffect/useconfirm">UseConfirm</Link></li>
                <li><Link to="/useeffect/usefadein">UseFadeIn</Link></li>
                <li><Link to="/useeffect/usefullscreen">UseFullScreen</Link></li>
                <li><Link to="/useeffect/usenetwork">UseNetWork</Link></li>
                <li><Link to="/useeffect/usenotification">UseNotification</Link></li>
                <li><Link to="/useeffect/usepreventleave">UsePreventLeave</Link></li>
                <li><Link to="/useeffect/usescroll">UseScroll</Link></li>
                <li><Link to="/useeffect/usetitle">UseTitle</Link></li>
            </ul>
            <Routes>
                <Route path="/useaxios" element={<UseAxios />} />
                <Route path="/usebeforeleave" element={<UseBeforeLeave />} />
                <Route path="/useclick" element={<UseClick />} />
                <Route path="/useconfirm" element={<UseConfirm />} />
                <Route path="/usefadein" element={<UseFadeIn />} />
                <Route path="/usefullscreen" element={<UseFullScreen />} />
                <Route path="/usenetwork" element={<UseNetWork />} />
                <Route path="/usenotification" element={<UseNotification />} />
                <Route path="/usepreventleave" element={<UsePreventLeave />} />
                <Route path="/usescroll" element={<UseScroll />} />
                <Route path="/usetitle" element={<UseTitle />} />
            </Routes>
        </>
    );
}

export default UseEffect;
