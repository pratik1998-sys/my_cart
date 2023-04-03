import React from 'react'
import './singleProduct.scss'
import { formatPrice } from '../../utils/helpers'
import { BsTrash } from 'react-icons/bs'

const SingleProduct = ({ product }) => {
  const {
    id,
    title,
    description,
    brand,
    category,
    discountPercentage,
    price,
    rating,
    images,
  } = product
  //console.log(product)
  return (
    <div className='container'>
      <div className='product-image'>
        <img src={images[0]} alt={title} />
      </div>
      <footer>
        <h5>{title}</h5>
        <p>{formatPrice(price)}</p>
        <button>
          <BsTrash />
        </button>
      </footer>
    </div>
  )
}

export default SingleProduct
