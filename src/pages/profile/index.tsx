import { useParams } from "react-router-dom"

import { Container } from "./stytes"

import api from "../../services/api"

import { idParams } from "../../types/idParams"
import { useEffect, useState } from "react"

import { listRevenue } from "../../types/listRevenue"
import { RevenueContent } from "../../components/revenueContent"
import { Home } from "../home"
import { Header } from "../../components/header"


export const Profile = () => {

    const { id } = useParams<idParams>()

    useEffect(() => {
        reqProfile()
    }, [])

    const reqProfile = async () => {
        const response = await api.get(`/revenues?userId=${id}`)
        setList(response.data)
    }



    const [list, setList] = useState<listRevenue[]>([] as listRevenue[])

    console.log(list)

    return (
        <Container>

            <Header/>

            {list.map((l) => {
                return <RevenueContent revenue={l} />
            })}

        </Container>
    )
}