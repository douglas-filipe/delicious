import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react' 
import jwt_decode from 'jwt-decode'


interface AuthProviderData{
    userId: string
}

interface AuthProviderProp{
    children: ReactNode
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)


export const AuthProvider = ({children}: AuthProviderProp) => {

    const [userId, setUserId] = useState(localStorage.getItem("@delicious") || '')

    return(
        <AuthContext.Provider value={{userId}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)