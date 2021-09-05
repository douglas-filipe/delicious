import { Header } from "../../components/header"
import { RevenuesList } from "../../components/revenuesList"
import { useAuth } from "../../providers/Auth"
import { useState } from "react"


export const Home = () => {

    const {userId} = useAuth()

    console.log(userId)
    return (
        <>
            <Header />
            {userId}
            <RevenuesList />
        </>
    )
}