import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import './App.css';

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
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
