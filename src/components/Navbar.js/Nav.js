import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { NavComponent } from './Nav.style';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const Nav = () => {
    const cartItems=useSelector(state=>state.cart)
    const [count,setCount] =useState(0)
    useEffect(()=>{
        let totalCount=cartItems.reduce((acc,current)=>{
            return acc+ current.qty
        },0)
        setCount(totalCount)
    },[cartItems,count])

    return (
        <NavComponent className="container-fluid d-flex justify-content-between align-items-center fixed-top">
            <Link to="/">
                <img src={logo} alt="logo" className="img-fluid nav-logo"/>
            </Link>
            <Link to="/cart" className="d-flex align-items-center cart">
                <div className="nav-cart mr-2">
                    <FaShoppingCart className="icon-cart" />
                </div>
                <div className="cart-item-counter">
                    <h4 className="count">{count}</h4>
                </div>
            </Link>
        </NavComponent>
    )
}

export default Nav
