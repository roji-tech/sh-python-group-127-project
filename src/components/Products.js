import React from 'react'
import { Outlet } from 'react-router-dom'
// Component import
import Product from './Product'

import '../css/products.css'


const Products = () => {
    return (
        <>
        <h2> Our Products</h2>
            <Outlet />
            
        </>
    )
}

export default Products