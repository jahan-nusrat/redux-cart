import React from 'react'
import Nav from '../Navbar.js/Nav'
import data from '../data/data'
import ProductItems from './ProductItems'
import './product.style.css'

const Products = () => {
    return (
        <div>
            <Nav />
            <main className="container products-section mt-5">
                <div className="row">
                    {
                        data.map(product =>{
                            return <ProductItems key={product.key} product={product} />
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Products
