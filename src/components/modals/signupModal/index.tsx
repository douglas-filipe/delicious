import { Container, Closed } from "./styles"

import { modalOpenProps } from "../../../types/modalOpenProps"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from "../../../services/api"
import { Input, Button, CloseButton } from '@chakra-ui/react'

interface DataForm {
    name: string,
    email: string,
    password: string
}


export const SignupModal = () => {

    const closeModal = () => {
        //close(false)
    }

    const schema = yup.object().shape({
        name: yup.string().required('*Campo obrigatório'),
        email: yup.string().email('Email inválido').required('*Campo obrigatório'),
        password: yup.string().required('*Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<DataForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: DataForm) => {
        const response = await api.post("/register", data)
        window.location.reload()
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CloseButton className="Close" onClick={closeModal} size="md"/>
                <h1>Crie sua conta</h1>

                <label>Nome:</label>
                <Input 
                    size="sm"   
                    variant="outline"
                    placeholder="Digite seu nome"
                    {...register('name')} 
                />

                <label>Email:</label>
                <Input 
                    size="sm"  
                    variant="outline"
                    placeholder="Digite seu email"
                    {...register('email')}    
                />
                <label>Senha:</label>
                <Input 
                    size="sm"  
                    type="password"
                    variant="outline"
                    placeholder="Digite sua senha"
                    {...register('password')}    
                />
                
                <Button className="Submit" type="submit" variant="solid">Enviar</Button>
                <p>Já tem uma conta? <a href="#">Entre</a></p>
            </form>
        </Container>

    )
}