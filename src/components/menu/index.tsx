import { useState } from "react"
import { Icon } from "@chakra-ui/react"
import { BiSearch } from 'react-icons/bi'
import logo from '../../assets/img/logo.svg'
import { Container, Desktop, Icons, MenuContainer, Mobile } from "./styles"
import { Image } from "@chakra-ui/image"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Button } from "@chakra-ui/button"
import { SignupModal } from "../modals/signupModal"
import { ReactComponent as Bolos } from '../../assets/icons/bolos.svg'
import carnes from '../../assets/icons/carnes.svg'
import doces from '../../assets/icons/doces.svg'
import massas from '../../assets/icons/massas.svg'
import salgados from '../../assets/icons/salgados.svg'
import sopas from '../../assets/icons/sopas.svg'
import { GiCakeSlice } from 'react-icons/gi'
import { FaCandyCane } from 'react-icons/fa'
import { Icon as Icone } from '@iconify/react'

import unhealthyFoodOutline from '@iconify/icons-healthicons/unhealthy-food-outline'


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

            <MenuContainer>

                <Mobile>

                    <button onClick={() => setOpenSignupModal(true)}>Cadastre-se</button>
                    <hr />
                    <Button className="Enter">Entrar</Button>

                </Mobile>

                <div className="menuListCategories">

                    <div className="category">
                        <GiCakeSlice />
                        <h3>Bolos</h3>
                    </div>


                    <div className="category">

                        <FaCandyCane />
                        <h3>Carnes</h3>

                    </div>


                    <div className="category">

                        <FaCandyCane />
                        <h3>Doces</h3>

                    </div>


                    <div className="category">

                        <FaCandyCane />
                        <h3>Massas</h3>

                    </div>


                    <div className="category">
                        <FaCandyCane />
                        <h3>Salgados</h3>

                    </div>


                    <div className="category">

                        <FaCandyCane />
                        <h3>Sopas</h3>

                    </div>

                </div>

            </MenuContainer>

        </Container>
    )
}