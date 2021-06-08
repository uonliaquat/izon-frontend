import React, { useState } from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage/index.js'
import { ProductShow } from '../ProductsPage/ProductShow'

export const  Pages = () => {
    const [currentPage, setCurrentPage] = useState("Products");

    return (
        currentPage === "Products" ?  <Products setCurrentPage={setCurrentPage}/> :
        currentPage === "ProductShow" ? <ProductShow setCurrentPage={setCurrentPage}/> :
        currentPage === "Categories" ? <Categories setCurrentPage={setCurrentPage}/> : null
    )
}