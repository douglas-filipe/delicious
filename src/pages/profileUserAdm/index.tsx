import { Container } from "./styles"
import { RevenueContent } from "../../components/revenueContent"
import { ProfileRevenueList } from "../../components/profileRevenueList"
import { Header } from "../../components/header"

export const ProfileUserAdm = () => {
    return (
        <Container>

            <Header/>

            <h1>Suas receitas</h1>
            <ProfileRevenueList />
            <h1>Ola</h1>

        </Container>

    )
}