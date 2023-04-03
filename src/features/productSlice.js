import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../api/productsApi'

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: '',
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

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {},
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
  },
})
export const { addProduct } = productSlice.actions
export default productSlice.reducer
