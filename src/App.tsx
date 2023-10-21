// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp'
import ProductPage from './pages/ProductsPage/ProductsPage'
import Profile from './pages/Profile/Profile'
import Donate from './pages/Donate/Donate'
import BasketPage from './pages/cart/CartPage'
import ProductInfoPage from './pages/productInfoPage/ProductInfoPage'
// import ProductList from './components/Basket/ProductList'
import { useEffect, useState } from 'react'
import { type FilterProps, type ProductRow } from './types/types'
// import { supabase } from './supabase/supabase'
import useAuthStore from './store/UseStore'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'
// import { Database } from './types/supabase'

const App: React.FC = () => {
  // const { user } = useAuthStore()
  const { isLoggedIn, products, data, fetchProductsFromSupabase } = useAuthStore()
  // const { productsFromSupabase, setProductsFromSupabase } = useState([])
  const [filter, setFilter] = useState<FilterProps>({
    categories: "All",
    status: "All",
    changeFilter: () => { },
    filteredProducts: [],
    // products: products
  })

  const lowercaseStatusFilter = filter.status.toLowerCase()
  const lowercaseCategoriesFilter = filter.categories.toLowerCase()


  const filterProducts = (productListProps: ProductRow[]): ProductRow[] => {
    return productListProps.filter((product) => {
      const productStatus = product.status.toLowerCase()
      const productCategory = product.category.toLowerCase()

      const statusMatch = filter.status === "All" || productStatus === lowercaseStatusFilter
      const categoryMatch = filter.categories === "All" || productCategory === lowercaseCategoriesFilter

      return statusMatch && categoryMatch
    })
  }
  const filteredProducts = filterProducts(products)
  // const handleProducts = () => {
  //   setProductsFromSupabase(products)
  // }
  useEffect(() => {
    const fetchData = async () => {
      if (products.length === 0) {
        await fetchProductsFromSupabase()
      }
    }
    fetchData()
    // fetchProductsFromSupabase()
  }, [fetchProductsFromSupabase, filter, filteredProducts, products.length])
  return (
    <>
    <Routes>
        <Route path='/' element={<Home changeFilter={setFilter} filteredProducts={filteredProducts} />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products' element={<ProductPage changeFilter={setFilter} filteredProducts={filteredProducts} categories={''} status={''} />} />
        <Route path='/cart' element={<BasketPage />} />
        <Route path='/product-info' element={<ProductInfoPage />} />
        <Route path='/profile' element={
          <ProtectedRoute isLoggedIn={isLoggedIn}  >
            <Profile />
          </ProtectedRoute>
        }>
        </Route >
        <Route path='/donate' element={
          <ProtectedRoute isLoggedIn={isLoggedIn}  >
            <Donate />
          </ProtectedRoute>
        }>
        </Route >

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
      <div>
        {isLoggedIn ? <p>Welcome, {data?.user?.email}</p> : null}
      </div>

    </>

  )
}

export default App
