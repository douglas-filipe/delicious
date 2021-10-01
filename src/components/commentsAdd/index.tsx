import { useForm } from "react-hook-form"
import { useAuth } from "../../providers/Auth"
import api from "../../services/api"

interface DataForm {
    comment: string
}

interface iComments {
    revenuesId: number,
    nameUser: String,
    reqComments: () => void
}

export const CommentsAdd = ({ revenuesId, nameUser, reqComments }: iComments) => {

    const { token, userId } = useAuth()

    const { register, handleSubmit } = useForm<DataForm>({})

    const onSubmitComment = async (data: DataForm) => {
        const { comment } = data
        const response = await api.post('/comments', {
            nameUser, comment, userId, revenuesId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        reqComments()

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitComment)}>
                <textarea {...register('comment')} required={true} />
                <button type="submit">Comentar</button>
            </form>
        </div>
    )
}

//nameUser: string,
    //userId: number,