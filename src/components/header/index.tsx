import { useState } from "react"
import { Link } from "react-router-dom"

import { Container, BrowseCategory, Logo, SessionUser, Menu } from "./styles"

import { UserModal } from "../modals/userModal"
import { Search } from "../search"

import { BiSearch, BiUser } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFavorite } from 'react-icons/gr'


import LogoSvg from '../../assets/img/Delicious.png'


export const Header = () => {

    const openModalUser = () => {

    }

    const openSearch = () => {
        setSearch(true)
    }

    const closeSearch = () => {
        setSearch(false)
    }

    const [search, setSearch] = useState(false)


    return (
        <Container>

            <Search open={search}/>

            <BrowseCategory>

                <Menu>
                    <GiHamburgerMenu />
                    <h2>Categorias</h2>
                </Menu>
                <>

                    {search ?
                    <div onClick={closeSearch}>X</div>
                    :
                    <BiSearch className="Search" onClick={openSearch}/>
                    }
                </>

            </BrowseCategory>

            <Logo>

                <Link to="/"><img src={LogoSvg} alt="Logotipo" /></Link>

            </Logo>

            <SessionUser>
                <BiUser onClick={openModalUser} />
            </SessionUser>

            <UserModal />

        </Container>
    )
}