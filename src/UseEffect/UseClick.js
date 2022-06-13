import React, { useRef } from "react";

function UseClick(){
    const input = useRef();
    //getElementByid()를 하는 것과 비슷한 개념
    setTimeout(()=>input.current.focus(),1000);
    return(
        <>
            <h3>Hi</h3>
            <input ref={input} placeholder="write here!"/>
        </>
    );
};

export default UseClick