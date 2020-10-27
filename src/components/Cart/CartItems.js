import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartQty, removeFromCart } from '../../redux/actions';

const CartItems = ({item}) => {
    const dispatch=useDispatch()
    const [quantity,setQuantity]= useState(item.qty)
    const handleRemoveItem=()=>{
        dispatch(removeFromCart(item.id))
    }
    const handleInputChange=(e)=>{
        setQuantity(e.target.value)
        dispatch(cartQty(item.id, e.target.value))
    }
    

    return (
        <div className="col-lg-8 col-md-9 col-11 mb-3">
            <div className="single-product d-flex">
                <div className="single-product-img">
                    <img src={item.img} alt={item.name} className="img-fluid"/>
                </div>
                <div className="single-product-details pl-3">
                    <p>{item.name.slice(0,70)}...</p>
                    <div className="price-details d-flex align-items-center">
                        <p>Price: <strong> ${(item.price*item.qty).toFixed(2)}</strong> </p>
                        <span className="quantity-details">
                            <label htmlFor="quantity">Qty:</label>
                            <input onChange={handleInputChange} min="1" type="number" name="quantity" value={quantity} className="mx-2" />
                        </span>
                    </div>
                </div>
                <button onClick={handleRemoveItem} className="btn product-remove">Remove</button>
            </div>
        </div>
    )
}

export default CartItems
