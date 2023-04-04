import React, { useState, useEffect } from 'react'
import './productList.scss'
import { useSelector } from 'react-redux'
import { SingleProduct } from '../index'

const ProductList = () => {
  const { products } = useSelector((state) => state.products)
  //console.log(products)
  return (
    <div className='productList'>
      <div className='productList__container'>
        {products?.map((product) => {
          return <SingleProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default ProductList
