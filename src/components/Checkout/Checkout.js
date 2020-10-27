import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Navbar.js/Nav';
import Order from '../Order/Order';
import './checkout.style.css'

const Checkout = () => {
    const handleForm =(e)=>{
        e.preventDefault();
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
                            className="form-control"
                            placeholder="Delivery to Door"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="road"
                            className="form-control"
                            placeholder="Road No."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="flat"
                            className="form-control"
                            placeholder="Flat, Suit or Floor"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
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
                            placeholder="Add delivery instruction"
                            required
                        />
                    </div>
                    <Link to="/success">
                        <button type="submit" className="btn btn-save text-center">
                            Place Your Order
                        </button>
                    </Link>
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
