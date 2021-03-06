import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/Auth/LoginScreen';
import { RegisterScreen } from '../components/Auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                exact
                path="/auth/login"
                component={ LoginScreen } />
                <Route
                exact
                path="/auth/register"
                component={ RegisterScreen } />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
