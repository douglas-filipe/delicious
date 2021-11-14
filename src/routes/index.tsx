import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Recipe } from "../pages/recipe"

export const Routes = () => {

    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/revenues/:id" exact>
                <Recipe/>
            </Route>

        </Switch>
    )
}