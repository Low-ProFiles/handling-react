import React from "react";

function UseConfirm(){
    const UseConfirm = (message="", onConfirm, onReject) => {
        if(!onConfirm && typeof onConfirm !== "function"){
            return;
        }
        if(onReject && typeof onReject !== "function"){
            return;
        }
        const confirmAction = () => {
            if(window.confirm(message)){
                onConfirm();
            }
            else{
                onReject();
            }
        };
        return confirmAction
    };

    const deleteProject=()=>console.log("Deleting the project...")
    const cancleDelete = () => console.log("Cancle delete")
    const confirmDelete = UseConfirm("Are you sure?", deleteProject,cancleDelete)
    return(
        <>
            <button onClick={confirmDelete}>Delete the project</button>
        </>
    );
};

export default UseConfirm