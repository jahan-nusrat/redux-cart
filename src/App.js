import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import SuccessOrder from './components/Success/SuccessOrder';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route path="/login">
                    <SignUp />
                </Route>
                <PrivateRoute path="/cart">
                    <Cart />
                </PrivateRoute>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/success">
                    <SuccessOrder />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
