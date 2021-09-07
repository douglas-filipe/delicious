import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Container } from "./styles"

import { BiSearch, BiUser } from 'react-icons/bi'
import { openProps } from "../../types/open"
import { useHistory } from "react-router"
import { Dispatch, SetStateAction } from "react"

interface iDataForm {
    search: string
}

interface props{
    open: boolean,
    search: Dispatch<SetStateAction<boolean>>
}

export const Search = ({ open, search }: props) => {

    const history = useHistory()

    const schema = yup.object().shape({
        search: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: iDataForm) => {
        history.push(`/search/${data.search}`)
        search(false)
    }

    return (
        <Container open={open}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    {...register('search')}
                />
                <button type="submit"><BiSearch type='submit'/></button>
            </form>
        </Container>
    )
}