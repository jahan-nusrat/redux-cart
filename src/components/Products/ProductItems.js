import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../redux/actions'

const ProductItems = ({product}) => {
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(addToCart(product.id))
    }
    return (
        <div className="col-md-4 text-center mb-4">
            <div className="product-card">
                <img src={product.img} alt={product.key} className="img-fluid"/>
                <div className="product-name mt-3">
                    <h5>{product.name.slice(0,60)}...</h5>
                </div>
                <div className="product-price">
                    <h4>Price: ${product.price}</h4>
                </div>
                <button className="btn cart-btn my-3" onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItems
