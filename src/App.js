import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchProducts, fetchCategories } from './features/productSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Products, Home, Footer } from './Components/index'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
