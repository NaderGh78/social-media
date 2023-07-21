import { createContext, useEffect, useState } from "react";
import LoginImgUser from "../assets/login-user-img.png";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    //save the currentuser in localstorage
    // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


    const [currentUser, setCurrentUser] = useState({ id: 1, name: "Nader G", userImg: LoginImgUser });


    const login = (e) => {
        e.preventDefault();
        //make static data for currentuser
        setCurrentUser({ id: 1, name: "Nader G", userImg: LoginImgUser });
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}