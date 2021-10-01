import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import jwt_decode from 'jwt-decode'


import api from "../../../services/api"
import { Container, Closed } from "./styles"
import { modalOpenProps } from "../../../types/modalOpenProps"


interface DataForm{
    email: string,
    password: string
}

interface iDecode{
    sub: string
}

export const LoginModal = ({ open, close }: modalOpenProps) => {

    const closeModal = () => {
        close(false)
    }

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('*Campo obrigatório'),
        password: yup.string().required('*Campo obrigatório')
    })

    const { register, handleSubmit, formState: {errors} } = useForm<DataForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: DataForm) => {
        const response = await api.post("/login", data)

        const { accessToken } = await response.data

        const decodeToken:iDecode = await jwt_decode(accessToken)

        const {sub} = await decodeToken

        await localStorage.setItem('@delicious', sub)
        await localStorage.setItem('@delicious/token', accessToken)

        window.location.reload()

    }

    return (
        <Container open={open}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Closed onClick={closeModal}>X</Closed>
                <h3>Entre em sua conta</h3>

                <label>Email:</label>
                <input
                    type="text"
                    {...register('email')}
                />

                <label>Senha:</label>
                <input
                    type="password"
                    {...register('password')}
                />

                <button type="submit">Entrar</button>

            </form>
        </Container>

    )
}