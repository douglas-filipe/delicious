import { Container, Login, Signup } from "./styles"

import { LoginModal } from "../loginModal"
import { SignupModal } from "../signupModal"
import { useState } from "react"
import { useAuth } from "../../../contexts/Auth"
import { useHistory } from "react-router"


export const UserModal = () => {

    const { userId } = useAuth()
    const history = useHistory()

    const openLoginModal = () => {
        setLoginModal(true)
        setSignupModal(false)
    }

    const openSignupModal = () => {
        setSignupModal(true)
        setLoginModal(false)
    }

    const [loginModal, setLoginModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const handleProfile = () => {
        history.push("/adm/profile")
    }

 
    return (
        <>

            <Container>
                
            </Container>

        </>
    )
}