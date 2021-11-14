import { createContext, ReactNode, useContext } from 'react' 


interface AuthProviderData{
    userId: string,
    token: string
}

interface AuthProviderProp{
    children: ReactNode
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)


export const AuthProvider = ({children}: AuthProviderProp) => {
    const userId = 'Teste'
    const token = "Teste"
    return(
        <AuthContext.Provider value={{userId, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)