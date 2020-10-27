import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
    const orderAmount=useSelector(state=>state.amount)
    const [totalAmount,setTotalAmount]= useState(0)
    const [item, setItem]= useState(0)
    useEffect(()=>{
        if(orderAmount.amount){
            setTotalAmount(orderAmount.amount)
            setItem(orderAmount.items)
        }
    },[orderAmount])
    return (
        <section className="order-history">
            <h3>Your Order History</h3>
            <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            <p>Total item: {item}</p>
        </section>
    )
}

export default Order
