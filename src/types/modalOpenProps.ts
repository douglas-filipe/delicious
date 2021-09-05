import { Dispatch, SetStateAction } from "react"


export type modalOpenProps = {
    open: boolean,
    close: Dispatch<SetStateAction<boolean>>
}