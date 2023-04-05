import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const getProducts = async (limit, skip) => {
  return await productsApi.get(`/products?limit=${limit}&skip=${skip}`)
  //console.log(res.data)
}
export const getCategories = async () => {
  return await productsApi.get('/products/categories')
}
export const getProductsOfCategory = async (category, limit, skip) => {
  //console.log(category, limit, skip)
  if (category === 'All') return await productsApi.get(`/products`)
  return await axios.request({
    url: `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`,
    method: 'GET',
  })
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
