import { useState } from "react"
import { Link } from "react-router-dom"
import { UserModal } from "../modals/userModal"

import { BiSearch, BiUser } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'



import LogoSvg from '../../assets/img/Delicious.png'


export const Menu = () => {

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
        <div>
            
        </div>
    )
}