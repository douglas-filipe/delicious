import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react' 
import jwt_decode from 'jwt-decode'


interface AuthProviderData{
    userId: string,
    token: string
}

interface AuthProviderProp{
    children: ReactNode
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)


export const AuthProvider = ({children}: AuthProviderProp) => {

    const [userId, setUserId] = useState(localStorage.getItem("@delicious") || '')
    const token = localStorage.getItem("@delicious/token") || ""
    return(
        <AuthContext.Provider value={{userId, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)