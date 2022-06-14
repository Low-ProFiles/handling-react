import React, { useEffect } from "react";

function UseBeforeLeave() {

    const UseBeforeLeave = onBefore => {
        const handle = (e) => {
            const { clientY } = e;
            if (clientY <= 0) {
                onBefore();
            }
        };
        useEffect(() => {
            document.addEventListener("mouseleave", handle);
            return () => document.removeEventListener("mouseleave", handle);
        });
        if (typeof onBefore !== "function") {
            return;
        }
    }

    const begForLife = () => console.log("please don't leave ㅜㅜ");
    UseBeforeLeave(begForLife)
    return (
        <>
            Don't go..
        </>
    );
};

export default UseBeforeLeave