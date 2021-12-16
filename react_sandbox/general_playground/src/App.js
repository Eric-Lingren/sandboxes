import React, { useContext, useEffect } from 'react'
// import ProductList from './ProductList.js'
import { ProductContext } from "./Context/ProductProvider.js"
// pull issues array from the issue provider
export default function App(){ 
    const {products, getAllProducts} = useContext(ProductContext)

    useEffect(() => getAllProducts(), [])

    console.log(products)

    return (
        <div className="inventory">
            {/* <ProductList products={products.allProducts} /> */}
        </div>
    )
}
