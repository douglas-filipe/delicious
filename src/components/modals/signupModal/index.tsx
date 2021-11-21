import { Container } from "./styles"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from "../../../services/api"
import { Input, CloseButton, useToast } from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners'
import { useState } from "react"
import { css } from '@emotion/react'
import { DataForm } from "../../../types/dataForm"
import { useAuth } from "../../../contexts/Auth"

interface modalProps {
    openSignupModal: boolean,
    setOpenSignupModal: (openSignupModal: boolean) => void
}

export const SignupModal = ({ openSignupModal, setOpenSignupModal }: modalProps) => {
    const { setModalLogin, setModalSignup } = useAuth()
    const toast = useToast()

    const [loadForm, setLoadForm] = useState<boolean>(false)

    const closeModal = () => {
        setOpenSignupModal(false)
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

    const loginOpenAndCloseSignup = async () => {
        await setModalLogin(true)
        setModalSignup(false)
    }



    return (
        <Container openSignupModal={openSignupModal}>
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
                <button
                    disabled={loadForm}
                    className="Submit">{loadForm ?
                        <BeatLoader
                            css={estilo}
                            size="15"
                            color="white"
                        />
                        : "Enviar"}
                </button>
                <p>Já tem uma conta? <span className="loginModal" onClick={loginOpenAndCloseSignup}>Entre</span></p>
            </form>
        </Container>

    )
}

const estilo = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
