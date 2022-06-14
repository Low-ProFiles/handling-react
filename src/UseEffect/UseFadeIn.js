import React, { useEffect, useRef } from "react";

function UseFadeIn() {
    const UseFadeIn = (duration=1, delay=0) => {
        const element = useRef();
        useEffect(() => {
            if (element.current) {
                const { current } = element;
                current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
                current.style.opacity = 1;
            }
        },);

        if(typeof duration !== "number" || typeof delay !== "number"){
            return;
        }
        return { ref: element, style: { opacity: 0 } };
    };

    const fadeInH1 = UseFadeIn(1,1);
    const fadeInP = UseFadeIn(1,2);

    return (
        <>
            <h1 {...fadeInH1}>Hi</h1>
            <p {...fadeInP}>lalala</p>
        </>
    );
};

export default UseFadeIn