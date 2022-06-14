import React, { useEffect, useRef } from "react";

function UseClick() {
    const UseClick = (onClick) => {
        const element = useRef();
        useEffect(() => {
            const status = element.current
            if (status) {
                status.addEventListener("click", onClick)
            }
            return () => {
                if (status) {
                    status.removeEventListener("click", onClick)
                }
            };
        },);

        if(typeof onClick !== "function"){
            return;
        }
        
        return element;
    }

    const sayHello = () => console.log("say Hello")
    const title = UseClick(sayHello);

    return (
        <>
            <h3 ref={title}>Hi</h3>
        </>
    );
};

export default UseClick