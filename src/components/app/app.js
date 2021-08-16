import React from 'react';
import { Route, Switch } from 'react-router';
import ShopHeader from '../schop-header';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
   
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={42} />
    <Switch>
<Route
    path="/"
    component={HomePage}
    exact>
</Route>
<Route
path="/cart"
component={CartPage}>

</Route>

    </Switch>
    </main>
    );
};
export default App;
