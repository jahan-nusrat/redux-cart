import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deliveryDetails } from '../../redux/actions';
import Nav from '../Navbar.js/Nav';
import Order from '../Order/Order';
import './checkout.style.css'

const Checkout = () => {
    const userDetails=useSelector(state =>state.userInfo)
    const history=useHistory()
    const dispatch=useDispatch()
    const [delivery,setDelivery]=useState({
        type:'',
        road:'',
        flat:'',
    })

    const handleDeliveryInput=(e)=>{
        setDelivery({
            ...delivery,
            [e.target.name]: e.target.value
        })
        dispatch(deliveryDetails(delivery))
    }

    const handleForm =(e)=>{
        e.preventDefault();
        if(delivery.type && delivery.road && delivery.flat){
            history.push('./success')
        }
    }
    
    return (
        <div className="container">
            <Nav />
            <div className="row justify-content-between checkout-section">
                <div className="col-md-6">
                    <form onSubmit={handleForm}>
                    <h4>Delivery Details</h4>
                    <hr />
                    <div className="form-group">
                        <input
                            type="text"
                            name="type"
                            onChange={handleDeliveryInput}
                            value={delivery.type}
                            className="form-control"
                            placeholder="Delivery to Door"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="road"
                            onChange={handleDeliveryInput}
                            value={delivery.road}
                            className="form-control"
                            placeholder="Road No."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="flat"
                            onChange={handleDeliveryInput}
                            value={delivery.flat}
                            className="form-control"
                            placeholder="Flat, Suit or Floor"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            className="form-control"
                            placeholder="Business name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="instruction"
                            cols="47"
                            rows="4"
                            onChange={handleDeliveryInput}
                            placeholder="Add delivery instruction"
                            required
                        />
                    </div>
                        <button type="submit" className="btn btn-save text-center">
                            Confirm Your Order
                        </button>
                </form>
                </div>
                <div className="col-md-4">
                    <Order />
                </div>
            </div>
        </div>
    )
}

export default Checkout
