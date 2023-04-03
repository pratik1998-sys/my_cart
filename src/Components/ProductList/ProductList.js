import React, { useState, useEffect } from 'react'
import { addProduct, updateProduct, deleteProduct } from '../../api/productsApi'
import './productList.scss'
import { useSelector } from 'react-redux'

const ProductList = () => {
  const { products } = useSelector((state) => state.products)
  console.log(products)
  return <div>productList</div>
}

export default ProductList
