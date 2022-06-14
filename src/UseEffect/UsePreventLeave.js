import React from "react";

function UsePreventLeave() {

    const UsePreventLeave = () => {

        const listener = e => {
            e.preventDefault();
            e.returnValue = ""
        }
        const enablePrevent = () => window.addEventListener("beforeunload", listener)
        const disablePrevent = () => window.removeEventListener("beforeunload", listener);
        return { enablePrevent, disablePrevent };
    }

    const { enablePrevent, disablePrevent } = UsePreventLeave();

    return (
        <>
            <button onClick={enablePrevent}>enablePrevent</button>
            <button onClick={disablePrevent}>disablePrevent</button>
        </>
    );
};

export default UsePreventLeave