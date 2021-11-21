import { useToast } from '@chakra-ui/toast'
import { createContext, ReactNode, useContext, useState } from 'react'
import api from '../../services/api'
import { DataForm } from '../../types/dataForm'


interface iReqLogin{
    username: string,
    _id: string,
    token: string

}


interface AuthProviderData {
    modalLogin: boolean,
    setModalLogin: (modalLogin: boolean) => void,
    modalSignup: boolean,
    setModalSignup: (modalSignup: boolean) => void,
    userId: string,
    reqLogin: (data: DataForm) => void,
    loadForm: boolean,
    setLoadForm: (loadForm: boolean) => void,
    token: string
}

interface AuthProviderProp {
    children: ReactNode
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: AuthProviderProp) => {
    const [modalLogin, setModalLogin] = useState<boolean>(false)
    const [modalSignup, setModalSignup] = useState<boolean>(false)
    const [loadForm, setLoadForm] = useState<boolean>(false)
    const [userId, setUserId] = useState(localStorage.getItem("@delicious/userId") || "")
    const [token, setToken] = useState(localStorage.getItem("@delicious/token") || "")
    const toast = useToast()

    const reqLogin = async (data: DataForm) => {

        try {
            const response = await api.post<iReqLogin>("/users/login", data)
            await localStorage.setItem("@delicious/userId", response.data._id)
            await localStorage.setItem("@delicious/token", response.data.token)
            await toast({ title: `Sucesso ao entrar em sua conta!`, status: 'success', isClosable: true, position: "top-right" })
            await setUserId(response.data._id)
            await setToken(response.data.token)
            setLoadForm(false)
        } catch {
            await toast({ title: `Email ou senha incorretos`, status: 'error', isClosable: true, position: "top-right" })
            setLoadForm(false)
        }

    }

    return (
        <AuthContext.Provider value={{ token, loadForm, setLoadForm, reqLogin, userId, modalLogin, setModalLogin, modalSignup, setModalSignup }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)