import { Container, Closed } from "./styles"

import { modalOpenProps } from "../../../types/modalOpenProps"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from "../../../services/api"
import { Input, Button, CloseButton, Spinner, useToast } from '@chakra-ui/react'
import { BeatLoader, BarLoader, BounceLoader, ClockLoader, CircleLoader } from 'react-spinners'
import { useState } from "react"
import {css} from '@emotion/react'
interface DataForm {
    username: string,
    email: string,
    password: string
}




export const SignupModal = () => {

    const toast = useToast()

    const [loadForm, setLoadForm] = useState<boolean>(false)

    const closeModal = () => {
        //close(false)
    }

    const schema = yup.object().shape({
        username: yup.string().required(' *Campo obrigatório'),
        email: yup.string().email(' Email inválido!').required(' *Campo obrigatório'),
        password: yup.string().required(' *Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<DataForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: DataForm) => {
        setLoadForm(true)
        try {
            const response = await api.post("/users/register", data)
            console.log(response)
            await toast({ title: `Sucesso ao criar a conta!`, status: 'success', isClosable: true, position: "top-right" })
            setLoadForm(false)
        } catch {
            await toast({ title: `Email já cadastrado`, status: 'error', isClosable: true, position: "top-right" })
            setLoadForm(false)
        }
    }

    

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CloseButton className="Close" onClick={closeModal} size="md" />
                <h1>Crie sua conta</h1>

                <label>Nome: <span>{errors.username?.message}</span></label>
                <Input
                    height="36px"
                    size="sm"
                    variant="outline"
                    placeholder="Digite seu nome"
                    {...register('username')}
                />

                <label>Email: <span>{errors.email?.message}</span></label>
                <Input
                    height="36px"
                    size="sm"
                    variant="outline"
                    placeholder="Digite seu email"
                    {...register('email')}
                />
                <label>Senha: <span>{errors.password?.message}</span></label>
                <Input
                    height="36px"
                    size="sm"
                    type="password"
                    variant="outline"
                    placeholder="Digite sua senha"
                    {...register('password')}
                />
                <button disabled={loadForm} className="Submit">{loadForm ? <BeatLoader css={estilo} size="15" color="white"/> : "Enviar"}</button>
                <p>Já tem uma conta? <a href="#">Entre</a></p>
            </form>
        </Container>

    )
}

const estilo = css`
    display: flex;
    justify-content: center;
    align-items: center
`;
