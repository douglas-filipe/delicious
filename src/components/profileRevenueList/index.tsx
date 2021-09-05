import { Container } from "./styles"
import { useAuth } from "../../providers/Auth"
import { useState, useEffect } from "react"
import api from "../../services/api"
import { RevenueContent } from "../revenueContent"

export const ProfileRevenueList = () => {
    const {userId} = useAuth()

    useEffect(() => {
        reqProfile()
    }, [])

    const reqProfile = async () => {
        const response = await api.get(`/revenues?userId=${userId}`)
        setList(response.data)
    }

    const [list, setList] = useState([])

    console.log(list)

    return(
        <Container>

            {list.map((l) => {
                return <RevenueContent revenue={l} />
            })}

        </Container>
    )
}