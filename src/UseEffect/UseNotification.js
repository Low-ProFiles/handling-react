import React from "react";

function UseNotification() {
    const useNotification = (title, options) => {
        if (!("Notification" in window)) {
            return;
        }
        const fireNotif = () => {
            if (Notification.permission !== "granted") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification(title, options);
                    } else {
                        return;
                    }
                })
            } else {
                new Notification(title, options);
            }
        };
        return fireNotif;
    };

    const triggerNotif = useNotification("오늘의 날씨를 확인해보세요", {body : "오늘 정말 덥지 않나요?"})
    return (
        <>
            <button onClick={triggerNotif}>Check the alarm!</button>
        </>
    );
};

export default UseNotification