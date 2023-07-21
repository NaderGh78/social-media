import { createContext, useEffect, useState } from "react";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

export const DarkModContext = createContext();

export const DarkMoodContextProvider = ({ children }) => {

    const [darkMod, setDarkMod] = useState(JSON.parse(localStorage.getItem("dark-mode")) || false);

    useEffect(() => {
        localStorage.setItem("dark-mode", darkMod)
    }, [darkMod])

    const toggle = () => {
        setDarkMod(!darkMod);
    }

    return (
        <DarkModContext.Provider value={{ darkMod, toggle }}>
            {children}
        </DarkModContext.Provider>
    )
}