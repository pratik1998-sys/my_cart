import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const getProducts = async () => {
  return await productsApi.get('/products')
  //console.log(res.data)
}
export const getCategories = async () => {
  return await productsApi.get('/products/categories')
  //console.log(res.data)
}
export const getProductsOfCategory = async (category) => {
  if (category === 'All') return await productsApi.get(`/products`)
  return await productsApi.get(`/products/category/${category}`)
  //console.log(res.data)
}

export const addProduct = async (product) => {
  return await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  }).then((res) => res.json())
}

export const updateProduct = async (id, product) => {
  //console.log(id, product)
  return await fetch(`https://dummyjson.com/products/${parseInt(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...product,
    }),
  }).then((res) => res.json())
}

export const deleteProduct = async (product) => {
  return await productsApi.delete(`/products/${product.id}`)
}

export default productsApi
