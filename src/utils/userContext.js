import { createContext } from "react";


const userContext = createContext({
    user : {
        name : "dummy profile",
        email: "demo@dummy.com"
    }
})

export default userContext;