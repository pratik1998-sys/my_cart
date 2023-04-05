import React from 'react'
import './pagination.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, setCurrentPage } from '../../features/productSlice'

const Pagination = () => {
  const { total, currentPage, currentCategory } = useSelector(
    (state) => state.products
  )
  const dispatch = useDispatch()

  const pageNumbers = []
  //console.log(total)
  let pages = Math.ceil(total / 20)
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i)
  }
  const clickHandler = (num) => {
    //console.log(currentCategory)
    dispatch(setCurrentPage(num))
    dispatch(fetchProducts([20, (num - 1) * 20, currentCategory]))
    window.scrollTo(0, 0)
  }

  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map((num, index) => {
          return (
            <li
              onClick={() => clickHandler(num)}
              key={index}
              className={currentPage === num ? 'active' : ''}
            >
              {num}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Pagination
