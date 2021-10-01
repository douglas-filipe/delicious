import { Container } from "./styles"
import api from '../../services/api'
import { useEffect, useState } from "react"
import { CommentsAdd } from "../commentsAdd"
import { useAuth } from "../../providers/Auth"

interface iCommentsProps {
    id: number
}

interface iComments {
    nameUser: string,
    comment: string,
    userId: number,
    revenuesId: number
}



export const Comments = ({ id }: iCommentsProps) => {

    const [comments, setComments] = useState<iComments[]>([] as iComments[])
    const [nameUser, setNameUser] = useState<String>('')
    const [control, setControl] = useState(0)

    const {userId, token} = useAuth()
    
    useEffect(() => {
        reqComments()
        reqUserName()
    }, [])

    const reqComments = async () => {
        const response = await api.get(`/comments?revenuesId=${id}`)
        setComments(response.data)


    }
    const reqUserName = async () => {
        const response = await api.get(`/users/${userId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setNameUser(response.data.name)

    }    

    console.log('Resultado: ' + control)

    return (
        <Container>
            {comments.map(c=>{
                return<div>
                    <p>{c.nameUser.substring(0, 1)}</p>
                    <p>{c.nameUser}</p>
                    <p>{c.comment}</p>
                </div>
            })}
            
            <CommentsAdd revenuesId={id} nameUser={nameUser} reqComments={reqComments}/>
        </Container>

    )
}

//