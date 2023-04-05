import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getProducts,
  getCategories,
  getProductsOfCategory,
} from '../api/productsApi'

const initialState = {
  products: [],
  categories: [],
  isLoading: false,
  isError: false,
  error: '',
  current: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      return getProducts().then((res) => res.data)
    } catch (error) {
      return error.message
    }
  }
)
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    try {
      return getCategories().then((res) => res.data)
    } catch (error) {
      return error.message
    }
  }
)
export const fetchProductsOfCategory = createAsyncThunk(
  'products/fetchProductsOfCategory',
  async (category) => {
    try {
      return getProductsOfCategory(category).then((res) => res.data)
    } catch (error) {
      return error.message
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === parseInt(action.payload.id)) {
          console.log('match found')
          const updatedProduct = { ...action.payload }
          console.log(updatedProduct)
          return updatedProduct
        }
        return product
      })
      state.current = null
    },
    getProduct: (state, action) => {
      //console.log(action.payload)
      state.current = {
        ...state.products.find(
          (product) => product.id === parseInt(action.payload)
        ),
      }
      // console.log(state.current)
    },
    removeProduct: (state, action) => {
      console.log(action.payload)
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    addIntoProducts: (state, action) => {
      state.products = [...state.products, action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        //console.log(action.payload.products)
        state.isLoading = false
        state.products = action.payload.products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        console.log(action)
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = ['All', ...action.payload]
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        console.log(action)
      })
      .addCase(fetchProductsOfCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProductsOfCategory.fulfilled, (state, action) => {
        state.isLoading = false
        console.log('event triggered')
        state.products = action.payload.products
      })
      .addCase(fetchProductsOfCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        console.log(action)
      })
  },
})
export const { addIntoProducts, removeProduct, getProduct, updateProducts } =
  productSlice.actions
export default productSlice.reducer
