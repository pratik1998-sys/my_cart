import React from 'react'
import './singleProduct.scss'
import { formatPrice } from '../../utils/helpers'
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import Stars from '../../utils/Stars'
import { deleteProduct } from '../../api/productsApi'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../features/productSlice'
import { Link } from 'react-router-dom'

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch()

  const removeItem = async (product) => {
    if (product.id > 100) dispatch(removeProduct(id))
    else {
      const response = await deleteProduct(product)
      dispatch(removeProduct(response.data.id))
    }
  }

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
        <div className='details'>
          <h5>{title}</h5>
          <p>{formatPrice(price)}</p>
          <Stars rating={rating} />
        </div>
        <div className='description'>
          <p>
            {description.substring(0, 70)}{' '}
            {description.length >= 70 ? <span> ... </span> : ''}
          </p>
        </div>
        <button>
          <Link to={`/product/${id}`}>
            <FaRegEdit />
          </Link>
          <BsTrash onClick={() => removeItem(product)} />
        </button>
      </footer>
    </div>
  )
}

export default SingleProduct
