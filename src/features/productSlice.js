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
  total: 0,
  currentPage: 1,
  currentCategory: 'All',
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (parameter) => {
    //console.log(parameter[0], parameter[1])
    try {
      if (parameter[2] === 'All')
        return getProducts(parameter[0], parameter[1]).then((res) => res.data)
      else {
        return getProductsOfCategory(
          parameter[2],
          parameter[0],
          parameter[1]
        ).then((res) => res.data)
      }
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
      return getProductsOfCategory(category, 20, 0).then((res) => res.data)
    } catch (error) {
      return error.message
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
    updateProducts: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === parseInt(action.payload.id)) {
          const updatedProduct = { ...action.payload }
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
      //console.log(action.payload)
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
        state.total = action.payload.total
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
        state.products = action.payload.products
        state.total = action.payload.total
      })
      .addCase(fetchProductsOfCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        console.log(action)
      })
  },
})
export const {
  addIntoProducts,
  removeProduct,
  getProduct,
  updateProducts,
  setCurrentPage,
  setCurrentCategory,
} = productSlice.actions
export default productSlice.reducer
