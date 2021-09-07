import { Switch, Route, Redirect } from "react-router-dom"
import { Home } from "../pages/home"
import { Profile } from "../pages/profile"
import { ProfileUserAdm } from "../pages/profileUserAdm"
import { Revenue } from "../pages/revenue"
import { SearchResults } from "../pages/searchResults"
import { useAuth } from "../providers/Auth"

export const Routes = () => {

    const {userId} = useAuth()

    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/revenues/:id" exact>
                <Revenue/>
            </Route>
            <Route path="/profile/:id" exact>
                <Profile/>
            </Route>

            {userId ? 
            <Route path="/adm/profile" exact>
                <ProfileUserAdm/>
            </Route>
            :
            <Redirect to="/"/>
            }

            <Route path="/search/:name" exact>
                <SearchResults/>
            </Route>



        </Switch>
    )
}