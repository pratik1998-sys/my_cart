import React, { useState } from 'react'
import './products.scss'
import { ProductList, Sidebar, Pagination } from '../index'
import { FaFilter } from 'react-icons/fa'
import { useEffect } from 'react'

const Products = () => {
  const showSidebar = () => {
    document.getElementsByClassName('sidebar')[0].classList.add('show')
    document.getElementsByClassName('filter-logo')[0].classList.add('hide')
    console.log()
  }

  useEffect(() => {}, [])

  return (
    <div className='products app_flex'>
      <div className='products__container'>
        <Sidebar />
        <FaFilter className='filter-logo' onClick={() => showSidebar()} />
        <div className='paginate'>
          <ProductList />
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Products
