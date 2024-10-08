import { createContext, useState, useEffect } from "react";

import { onAutStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAutStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            console.log(user)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}