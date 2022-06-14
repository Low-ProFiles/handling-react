import React, { useEffect, useState } from "react";

function UseTitle(){

    const UseTitle = (initialTitle) => {
        const [title, setTitle] = useState(initialTitle)
        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = title;
        };
        useEffect(updateTitle,[title]);
        return setTitle;
    };

    const titleUpdater = UseTitle("Loading...")
    setTimeout(()=>titleUpdater("useTitle"), 2000);
    return(
        <>
            UseTitle
            <h3>Look at the tap name changing</h3>
        </>
    );
};

export default UseTitle