import { useState } from "react"
import { Icon } from "@chakra-ui/react"
import { BiSearch } from 'react-icons/bi'
import logo from '../../assets/img/logo.svg'
import { Container, Desktop, Icons } from "./styles"
import { Image } from "@chakra-ui/image"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineDownCircle } from 'react-icons/ai'
import { Button } from "@chakra-ui/button"
import { SignupModal } from "../modals/signupModal"


export const Menu = () => {

    const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
    const [openSignupModal, setOpenSignupModal] = useState<boolean>(false)

    return (
        <Container openMenuMobile={openMenuMobile}>
            <SignupModal openSignupModal={openSignupModal} setOpenSignupModal={setOpenSignupModal} />
            <Icons>

                <Icon className="Search-Desktop" as={BiSearch} color="white" w={30} h={30} />
                <div className="Barra"></div>
                <div className="hamburguer">
                    <Icon as={GiHamburgerMenu} color="white" w={30} h={30} />
                    <span>Receitas</span>
                </div>


            </Icons>
            <Image src={logo} alt="logotipo" />
            <Icon className="Search" as={BiSearch} color="white" w={30} h={30} />
            
            <Desktop>

                <button onClick={() => setOpenSignupModal(true)}>Cadastre-se</button>
                <hr />
                <Button className="Enter">Entrar</Button>

            </Desktop>

        </Container>
    )
}