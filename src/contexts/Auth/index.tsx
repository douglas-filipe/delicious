import { useToast } from '@chakra-ui/toast'
import { createContext, useContext, useState } from 'react'
import { AuthProviderData, AuthProviderProp, iReqLogin } from '../../types/auth'
import { DataForm } from '../../types/dataForm'
import api from '../../services/api'

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
            await setLoadForm(false)
            setModalLogin(false)

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