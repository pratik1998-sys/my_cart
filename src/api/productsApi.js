import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const getProducts = async () => {
  return await productsApi.get('/products')
  //console.log(res.data)
}

export const addProduct = async (product) => {
  return await productsApi.post('/products/add', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
}

export const updateProduct = async (product) => {
  return await productsApi.patch(`/products/${product.id}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
}

export const deleteProduct = async (product) => {
  return await productsApi.delete(`/products/${product.id}`)
}

export default productsApi
