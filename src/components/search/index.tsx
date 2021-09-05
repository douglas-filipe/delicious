import { Container } from "./styles"

import { BiSearch, BiUser } from 'react-icons/bi'
import { openProps } from "../../types/open"

export const Search = ({open}: openProps) => {
    return(
        <Container open={open}>
            <input/>
            <BiSearch/>
        </Container>
    )
}