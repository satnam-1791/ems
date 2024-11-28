import React, { useEffect, useState ,createContext} from 'react'
import { getLocalstorage, setLocalkstorage } from '../../utils/Localstorage'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalkstorage()
        const {employees} = getLocalstorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider