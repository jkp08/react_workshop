import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [activeUser, setActiveUser] = useState({
        isLoggedIn: false,
    });

    const [authenticated,setAuthenticated] = useState(false)


    return (
        <AuthContext.Provider value={{ activeUser,setActiveUser,authenticated,setAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
