import { Container, Closed } from "./styles"

import { modalOpenProps } from "../../../types/modalOpenProps"

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from "../../../services/api"

interface DataForm{
    name: string,
    email: string,
    password: string
}


export const SignupModal = ({ open, close }: modalOpenProps) => {

    const closeModal = () => {
        close(false)
    }

    const schema = yup.object().shape({
        name: yup.string().required('*Campo obrigatório'),
        email: yup.string().email('Email inválido').required('*Campo obrigatório'),
        password: yup.string().required('*Campo obrigatório')
    })

    const { register, handleSubmit, formState: {errors} } = useForm<DataForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: DataForm) => {
        const response = await api.post("/register", data)
        window.location.reload()
    }

    return (
        <Container open={open}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Closed onClick={closeModal}>X</Closed>
                <h3>Crie sua conta</h3>

                <label>Nome:</label>
                <input
                    type="text"
                    {...register('name')}
                />

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

                <button type="submit">Enviar</button>

            </form>
        </Container>

    )
}