import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import api from "../../services/api"

import { Container, Content } from "./styles"

import { listRevenue } from "../../types/listRevenue"
import { Header } from "../header"

interface listRevenueProps {
    revenue: {
        title: string,
        userName: string,
        userId: number,
        img: string,
        id: number
    }
}

interface iRevenue{
    title: string
}


export const RevenueContent = ({ revenue }: listRevenueProps) => {

    const history = useHistory()

    const selectRevenue = (id: number) => {
        history.push(`/revenues/${id}`)
        console.log(id)
    }

  

    const {title, userName, userId, img, id} = revenue


    return (
        <Container>

                

                <Content onClick={() => selectRevenue(id)}>
                    <img src={img}/>
                    <h3>{title}</h3>
                    <p>Enviado por <span>{userName}</span></p>
                </Content>

        </Container>
    )
}