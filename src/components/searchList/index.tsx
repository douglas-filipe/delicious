import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Container} from './styles'
import {listRevenue} from '../../types/listRevenue'
import api from '../../services/api'
import { RevenueContent } from '../../components/revenueContent'

interface nameParams{
    name: string
}


export const SearchList = () => {

    const { name } = useParams<nameParams>()

    useEffect(() => {
        reqSearch()
    }, [name])


    const reqSearch = async () => {
        const response = await api.get(`/revenues?title_like=${name}`)
        setList(response.data)
    }

    const [list, setList] = useState<listRevenue[]>([] as listRevenue[])

    console.log(list)

    return (
        <Container>
            {list.map(el=>{
                return <RevenueContent revenue={el}/>
            })}
        </Container>
    )
}