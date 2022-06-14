import React, { useRef } from "react";

function UseFullScreen() {
    const useFullScreen = (callback) => {
        const element = useRef();
        const runCb = isFull => {
            if (callback && typeof callback === "function") {
                callback(isFull)
            }
        }
        const triggerFull = () => {
            if (element.current) {
                element.current.requestFullscreen();
                runCb(true)
            }
        };
        const exitFull = () => {
            document.exitFullscreen();
            runCb(false);
        }
        return { element, triggerFull, exitFull };
    }
    const callback = (isFull) => {
        console.log(isFull ? "we are full" : "we are small");
    }
    const { element, triggerFull, exitFull } = useFullScreen(callback);
    return (
        <div style={{ height: "1000vh" }}>
            <div ref={element}>
                <img ref={element} src={require("./dog.jpg")} alt="dog" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};

export default UseFullScreen