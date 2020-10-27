import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './success.style.css'

const SuccessOrder = () => {
    const deliveryInfo=useSelector(state=>state.delivery)
    const totalAmount=useSelector(state=>state.amount)
    const [totalPrice,setTotalPrice]= useState(0)
    useEffect(()=>{
        if(totalAmount.amount){
            setTotalPrice(totalAmount.amount)
        }
    },[totalAmount])

    return (
        <section className="success container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 col-10 delivery-details">
                    <h3>You have successfully placed your order</h3>
                    <h4 style={{color: 'red'}} className="mt-3">Deliver Items To: </h4>
                    <p>Type of delivery: {deliveryInfo.type}</p>
                    <p>Road No: {deliveryInfo.road}</p>
                    <p>Flat No: {deliveryInfo.flat}</p>
                    <h4 style={{color: 'green'}} className="mt-3">Total Amount: ${totalPrice.toFixed(2)}</h4>
                </div>
            </div>
        </section>
    )
}

export default SuccessOrder
