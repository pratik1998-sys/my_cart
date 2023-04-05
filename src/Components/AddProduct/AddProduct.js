import React, { useEffect, useState } from 'react'
import './addProduct.scss'
import { addProduct, updateProduct } from '../../api/productsApi'
import {
  addIntoProducts,
  getProduct,
  updateProducts,
} from '../../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const AddProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.products)
  const submitHandler = async (e) => {
    e.preventDefault()
    const product = {
      title: e.target.name.value,
      description: e.target.desc.value,
      brand: e.target.brand.value,
      category: e.target.category.value,
      discountPercentage: parseFloat(e.target.discount.value) || 0,
      price: parseInt(e.target.price.value),
      rating: parseFloat(e.target.rating.value) || 0,
      images: [
        e.target.image[0]?.value,
        e.target.image[1]?.value,
        e.target.image[2]?.value,
      ],
    }
    //console.log(product)
    if (current) {
      const response = await updateProduct(id, product)
      console.log(response)
      dispatch(updateProducts(response))
    } else {
      const response = await addProduct(product)
      dispatch(addIntoProducts(response))
    }
  }

  //console.log(current)
  useEffect(() => {
    if (id) {
      //console.log(id)
      dispatch(getProduct(id))
    }
  }, [id])

  return (
    <div className='addProduct app_flex'>
      <form action='' onSubmit={(e) => submitHandler(e)}>
        <div className='name'>
          <label htmlFor='name'>Product Name :</label>
          <input
            type='text'
            placeholder={current?.title || 'Enter title'}
            name='name'
            id='name'
          />
        </div>
        <div className='dscription'>
          <label htmlFor='desc'>Description :</label>
          <input type='text' name='desc' id='desc' />
        </div>
        <div className='price'>
          <label htmlFor='price'>Price :</label>
          <input type='number' name='price' id='price' />
        </div>
        <div className='brand'>
          <label htmlFor='brand'>Brand name :</label>
          <input type='text' name='brand' id='brand' />
        </div>
        <div className='category'>
          <label htmlFor='category'>Category :</label>
          <input type='text' name='category' id='category' />
        </div>
        <div className='discount'>
          <label htmlFor='discount'>Discount :</label>
          <input type='number' step={'.01'} name='discount' id='discount' />
        </div>
        <div className='rating'>
          <label htmlFor='rating'>Product Rating :</label>
          <input
            type='number'
            step={'.01'}
            name='rating'
            id='rating'
            max={5}
            min={0}
          />
        </div>
        <div className='image'>
          <label htmlFor='image'>Image Url 1 :</label>
          <input type='url' name='imgUrl' id='image' />
        </div>
        <div className='image'>
          <label htmlFor='image'>Image Url 2 :</label>
          <input type='url' name='imgUrl' id='image' />
        </div>
        <div className='image'>
          <label htmlFor='image'>Image Url 3 :</label>
          <input type='url' name='imgUrl' id='image' />
        </div>
        <button>
          <p>{current ? 'Update product' : 'Add product'}</p>
        </button>
      </form>
    </div>
  )
}

export default AddProduct
