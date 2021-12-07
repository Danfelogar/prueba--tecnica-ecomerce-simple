import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { ProductRouter } from "./ProductRouter";



export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route
                    path="/auth"
                    component={ AuthRouter }
                    />
                    <Route
                    path="/product"
                    component={ ProductRouter }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </>
        </Router>
    )
}
