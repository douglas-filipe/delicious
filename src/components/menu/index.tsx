import { useState } from "react"
import { Icon } from "@chakra-ui/react"
import { BiSearch } from 'react-icons/bi'
import logo from '../../assets/img/logo.svg'
import { Container, Desktop, Icons, MenuContainer, Mobile } from "./styles"
import { Image } from "@chakra-ui/image"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Button } from "@chakra-ui/button"
import { SignupModal } from "../modals/signupModal"
import { GiCakeSlice } from 'react-icons/gi'
import { FaCandyCane } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { LoginModal } from "../modals/loginModal"
import { useAuth } from "../../contexts/Auth"
import {FaHamburger} from 'react-icons/fa'

export const Menu = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const { modalLogin, setModalSignup, modalSignup, setModalLogin } = useAuth()

    return (
        <Container>
            <SignupModal openSignupModal={modalSignup} setOpenSignupModal={setModalSignup} />
            <LoginModal openLoginModal={modalLogin} setOpenLoginModal={setModalLogin} />
            <Icons>

                <Icon className="Search-Desktop" as={BiSearch} color="white" w={30} h={30} />
                <div className="Barra"></div>

                {openMenu ?

                    <div className="hamburguer" onClick={() => setOpenMenu(false)}>
                        <Icon as={GiHamburgerMenu} color="white" w={30} h={30} />
                        <span>Receitas</span>
                    </div>

                    :

                    <div className="hamburguer" onClick={() => setOpenMenu(true)}>
                        <Icon as={GiHamburgerMenu} color="white" w={30} h={30} />
                        <span>Receitas</span>
                    </div>

                }



            </Icons>
            <Image src={logo} alt="logotipo" />
            <Icon className="Search" as={BiSearch} color="white" w={30} h={30} />

            <Desktop>

                <button onClick={() => setModalSignup(true)}>Cadastre-se</button>
                <hr />
                <Button onClick={() => setModalLogin(true)} className="Enter">Entrar</Button>

            </Desktop>

            <MenuContainer openMenu={openMenu}>

                <div className="menuListCategories">

                    <Mobile>
                        <AiOutlineCloseCircle className="closeMenu" onClick={() => setOpenMenu(false)} />
                        <button className="Signup" onClick={() => setModalSignup(true)}>Cadastre-se</button>
                        <Button onClick={() => setModalLogin(true)} className="Enter">Entrar</Button>

                    </Mobile>

                    <div className="categories">

                        <div className="category">
                            <GiCakeSlice />
                            <h3>Bolos</h3>
                        </div>

                        <div className="BarraLateral"></div>

                        <div className="category">

                            <FaCandyCane />
                            <h3>Carnes</h3>

                        </div>

                        <div className="BarraLateral"></div>


                        <div className="category">

                            <FaCandyCane />
                            <h3>Doces</h3>

                        </div>

                        <div className="BarraLateral"></div>


                        <div className="category">

                            <FaCandyCane />
                            <h3>Massas</h3>

                        </div>

                        <div className="BarraLateral"></div>


                        <div className="category">
                            <FaHamburger />
                            <h3>Salgados</h3>

                        </div>

                        <div className="BarraLateral"></div>


                        <div className="category">

                            <FaCandyCane />
                            <h3>Sopas</h3>

                        </div>

                    </div>

                </div>

            </MenuContainer>

        </Container>
    )
}