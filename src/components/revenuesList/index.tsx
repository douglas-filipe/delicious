import { useEffect, useState } from "react"
import api from "../../services/api"

import { Container, Content } from "./styles"


import { listRevenue } from "../../types/listRevenue"
import { RevenueContent } from "../revenueContent"


export const RevenuesList = () => {

    useEffect(() => {
        revenues()
    }, [])

    const revenues = async () => {
        const response = await api.get("/revenues/list")
        setList(response.data)
    }

    
    
    const [list, setList] = useState<listRevenue[]>([] as listRevenue[])
    console.log(list)

    return (
        <Container>


            {list.map((l) => {
                return <RevenueContent revenue={l} />
            })}


        </Container>
    )
}