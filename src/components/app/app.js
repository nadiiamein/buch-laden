import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
    return (
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
    );
};
export default App;
