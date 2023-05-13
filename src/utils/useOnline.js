import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
       
        const handleOnline = () => {
          setIsOnline(true);
        }
        const handleOffline = () => {
        setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        console.log("use Online hooks");

    }, []);
    return isOnline;
}

export default useOnline;