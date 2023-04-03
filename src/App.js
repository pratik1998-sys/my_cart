import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './features/productSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, ProductList, Home, Footer } from './Components/index'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
