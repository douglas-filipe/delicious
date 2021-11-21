import { ReactNode } from 'react';
import { DataForm } from './dataForm'

export interface iReqLogin{
    username: string,
    _id: string,
    token: string

}

export interface AuthProviderData {
    modalLogin: boolean,
    setModalLogin: (modalLogin: boolean) => void,
    modalSignup: boolean,
    setModalSignup: (modalSignup: boolean) => void,
    userId: string,
    reqLogin: (data: DataForm) => void,
    loadForm: boolean,
    setLoadForm: (loadForm: boolean) => void,
    token: string
}

export interface AuthProviderProp {
    children: ReactNode
}