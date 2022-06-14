import React, { useEffect, useState } from "react";

function UseScroll(){
    const useScroll = () => {
        const [state, setState] = useState({
            x:0,
            y:0
        });
        const onScroll = () => {
            setState({y: window.scrollY, x :window.scrollX});
        };
        useEffect(()=>{
            window.addEventListener("scroll", onScroll);
            return()=> window.removeEventListener("scroll", onScroll);
        })
        return state;
    }

    const {y} = useScroll();
    return(
        <div style={{height: "100vh"}}>
            <h1 style={{position:"sticky", color:y>100 ? "Red" : "Blue"}}>asd</h1>
        </div>
    );
};

export default UseScroll