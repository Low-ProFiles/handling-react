import React, { useEffect, useState } from "react";

function UseNetWork() {
    const UseNetWork = onChange => {
        const [status, setStatue] = useState(navigator.onLine);
        const handleChange = () => {
            if (typeof onChange === "function") {
                onChange(navigator.onLine);
            };
            setStatue(navigator.onLine);
        };
        useEffect(() => {
            window.addEventListener("online", handleChange);
            window.addEventListener("offline", handleChange);
            return() => {
                window.removeEventListener("online", handleChange);
                window.removeEventListener("offline", handleChange);
            }
        });
        return status;
    };
    const handleNetworkChange = (online) => {
        console.log(online ? "Online" : "Offline")
    }
    const onLine = UseNetWork(handleNetworkChange);
    return (
        <>
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </>
    );
};

export default UseNetWork;