import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import {
  fetchProductsOfCategory,
  setCurrentCategory,
} from '../../features/productSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { categories, currentPage, currentCategory } = useSelector(
    (state) => state.products
  )
  //console.log(categories)

  const categoryHandler = (category) => {
    document.getElementsByClassName('sidebar')[0].classList.remove('show')
    document.getElementsByClassName('filter-logo')[0].classList.remove('hide')

    dispatch(setCurrentCategory(category))
    dispatch(fetchProductsOfCategory(category))
  }
  //console.log(currentCategory)

  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <div className='sidebar-addProduct'>
          <Link to='/product/add'>
            <button>
              <p>Add Product</p>
            </button>
          </Link>
        </div>
        <div className='sidebar-categories'>
          {/* category */}
          <h5>Category</h5>
          <div>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={() => categoryHandler(c)}
                  type='button'
                  name='category'
                  className={`${currentCategory === c ? 'active' : null}`}
                >
                  {c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}
                </button>
              )
            })}
          </div>
          {/* end of category */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
