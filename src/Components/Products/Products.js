import React from 'react'
import './products.scss'
import { ProductList, Sidebar } from '../index'

const Products = () => {
  return (
    <div className='products app_flex'>
      <div className='products__container'>
        <Sidebar />
        <ProductList />
      </div>
    </div>
  )
}

export default Products
