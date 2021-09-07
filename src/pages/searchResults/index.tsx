import { useEffect, useState } from "react"
import { Container } from "./styles"
import api from "../../services/api"
import { listRevenue } from '../../types/listRevenue'
import {useParams} from 'react-router-dom'
import { RevenueContent } from "../../components/revenueContent"
import { Header } from "../../components/header"
import { SearchList } from "../../components/searchList"

interface nameParams{
    name: string
}



export const SearchResults = () => {

    const { name } = useParams<nameParams>()

    useEffect(()=>{
        reqSearch()
    }, [name])
    
    
    const reqSearch = async() => {
        const response = await api.get(`/revenues?title_like=${name}`)
        setList(response.data)
    }
    
    const [list, setList] = useState<listRevenue[]>([] as listRevenue[])

    console.log(list)

    return(
        <Container>
            <Header/>
            <SearchList/>
        </Container>
    )
}