// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
// import SignUp from './pages/SignUp'
import ProductPage from './pages/ProductsPage/ProductsPage'
import Profile from './pages/Profile/Profile'
import Donate from './pages/Donate/Donate'
import BasketPage from './pages/cart/CartPage'
import ProductInfoPage from './pages/productInfoPage/ProductInfoPage'
import ProductList from './components/Basket/ProductList'
import { useEffect, useState } from 'react'
import { type productsListProps } from './types/types.d'

const App: React.FC = () => {
  const [filter, setFilter] = useState({
    categories: "All",
    status: "All"
  })
  // const [filteredProducts, setFilteredProducts] = useState<ProductListProps>([])
  console.log(filter)
  const lowercaseStatus = filter.status.toLowerCase()
  const lowercaseCategories = filter.categories.toLowerCase()
  const filterProducts = (ProductList: productsListProps) => {
    return ProductList.filter((product) => {
      const productStatus = product.status.toLowerCase()
      const productCategory = product.category.toLowerCase()

      // Comprueba si el filtro es "all" o si coincide con la categoría y el estado del producto
      const statusMatch = filter.status === "All" || productStatus === lowercaseStatus
      const categoryMatch = filter.categories === "All" || productCategory === lowercaseCategories

      return statusMatch && categoryMatch
    })
  }
  const filteredProducts = filterProducts(ProductList)

  useEffect(() => {
  }, [filter, filteredProducts])
  return (
    <Routes>
      <Route path='/' element={<Home changeFilter={setFilter} filteredProducts={filteredProducts} />} />
      {/* <Route path='/sign-in' element={<SignUp />} /> */}
      {/* routes to protect */}
      <Route  path='/products'  element={<ProductPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/cart' element={<BasketPage />}
      />
      <Route path='/product-info' element={<ProductInfoPage />} />
    </Routes>
  )
}

export default App
