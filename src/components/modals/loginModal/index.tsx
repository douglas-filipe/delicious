import { Container } from "./styles"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input, CloseButton } from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners'
import { css } from '@emotion/react'
import { DataForm } from "../../../types/dataForm"
import { useAuth } from "../../../contexts/Auth"

interface modalProps {
    openLoginModal: boolean,
    setOpenLoginModal: (openSignupModal: boolean) => void
}

export const LoginModal = ({ openLoginModal, setOpenLoginModal }: modalProps) => {

    const { setModalLogin, setModalSignup, reqLogin, loadForm, setLoadForm } = useAuth()

    const closeModal = () => {
        setOpenLoginModal(false)
    }

    const schema = yup.object().shape({
        email: yup.string().email(' Email inválido!').required(' *Campo obrigatório'),
        password: yup.string().required(' *Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<DataForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: DataForm) => {
        setLoadForm(true)
        reqLogin(data)
    }
    

    const signupOpenAndCloseLogin = async () => {
        setModalLogin(false)
        setModalSignup(true)
    }



    return (
        <Container openLoginModal={openLoginModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CloseButton className="Close" onClick={closeModal} size="md" />
                <h1>Entre em sua conta</h1>

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
                        : "Entrar"}
                </button>
                <p>Não possui uma conta? <span className="signupModal" onClick={signupOpenAndCloseLogin}>Cadastre-se</span></p>
                <a href="/#">Esqueceu sua senha?</a>
            </form>
        </Container>

    )
}

const estilo = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
