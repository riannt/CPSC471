import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const userTracker = createContext()

export const UserTrackerProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/auth/login", inputs)
        setCurrentUser(res.data);
    }

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]
    )

    return(
        <userTracker.Provider value={{currentUser,login,setCurrentUser}}>
            {children}
        </userTracker.Provider>
    )

}