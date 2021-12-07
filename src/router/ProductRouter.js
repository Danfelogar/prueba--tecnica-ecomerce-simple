import { Switch, Route, Redirect } from 'react-router-dom';

import { ProducList } from '../components/ProducList/ProducListScreen';
import { ProductBasket } from '../components/ProductBasket/ProductBasketScreen';

export const ProductRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                exact
                path="/product/list"
                component={ ProducList } />
                <Route
                exact
                path="/product/basket"
                component={ ProductBasket } />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
