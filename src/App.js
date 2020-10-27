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

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/login">
                    <SignUp />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/success">
                    <SuccessOrder />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
