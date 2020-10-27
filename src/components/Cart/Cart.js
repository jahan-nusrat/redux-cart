import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems';
import './cart.style.css'
import Nav from '../Navbar.js/Nav';
import { useEffect } from 'react';
import { amountInfo } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
    const userDetails=useSelector(state =>state.userInfo)
    const amountDetails=useSelector(state => state.amount)
    const cartItems=useSelector(state=>state.cart)
    const [totalAmount,setTotalAmount]= useState(0)
    const [totalQty,setTotalQty]= useState(0)
    const dispatch=useDispatch()

    useEffect(()=>{
        let price= cartItems.reduce((acc,current)=>{
            return acc + (current.price * current.qty);
        },0)
        let qty=cartItems.reduce((acc,current)=>{
            return acc + current.qty
        },0)
        setTotalAmount(price)
        setTotalQty(qty)
        dispatch(amountInfo(price,qty))
    },[cartItems,totalAmount,totalQty,setTotalAmount,setTotalQty])

    return (
        <section className="container">
            <Nav />
            <div className="row justify-content-between cart-section">
                {
                    cartItems.map(item=>{
                        return <CartItems key={item.id} item={item} />
                    })
                }
                <div className="col-lg-3 col-md-3 col-7 cart-summary-section">
                    <div className="cart-summary">
                        <div className="cart-summary-title">
                            <h3>Cart Summary</h3>
                            <div className="cart-summary-price mt-4">
                                <p>Total: <strong>{totalQty} items</strong> </p>
                                <h4 className="total-amount pt-3">Total Amount: <strong>${totalAmount.toFixed(2)}</strong> </h4>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button className="btn cart-btn mt-4">Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
                {
                    userDetails.email && <div className="col-lg-3 col-md-3 col-7 user-section">
                        <h3>Your Details</h3>
                        <p>Name: <strong>{userDetails.name}</strong> </p>
                        <p>Email: <strong>{userDetails.email}</strong> </p>
                        <p>Phone: <strong>{userDetails.number}</strong> </p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Cart
