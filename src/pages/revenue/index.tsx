import { useParams, useHistory } from "react-router-dom"
import api from "../../services/api"
import { Header } from '../../components/header'

import { Container, Content } from "./styles"
import { useEffect, useState } from "react"

import { listRevenue } from '../../types/listRevenue'
import { idParams } from '../../types/idParams'



interface revenueParams {
    title: string
}

export const Revenue = () => {

    const history = useHistory()

    const { id } = useParams<idParams>()

    useEffect(() => {
        reqRevenue()
    }, [])

    const reqRevenue = async () => {
        const response = await api.get(`/revenues/${id}`)
        setRevenueDetails([response.data])
    }

    const handleProfile = (userId: number) => {
        history.push(`/profile/${userId}`)
    }

    const [revenueDetails, setRevenueDetails] = useState<listRevenue[]>([] as listRevenue[])


    return (
        <Container>

            <Header />

            {revenueDetails.map(reve => {
                return <Content>
                    <img src={reve.img} />
                    <h3>{reve.title}</h3>
                    <p>Enviado por <span onClick={() => handleProfile(reve.userId)}>{reve.userName}</span></p>

                    <section>
                        <h1>Ingredientes:</h1>
                        {reve.ingredients.split(',').map((el) => {
                            return <p>{el}</p>
                        })}
                    </section>

                    <section>
                        <h1>Modo de preparo:</h1>
                        {reve.preparation}
                    </section>

                </Content>
            })}


        </Container>
    )
}