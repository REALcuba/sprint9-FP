import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp'
import ProductPage from './pages/ProductsPage/ProductsPage'
import Profile from './pages/Profile/Profile'
import Donate from './pages/Donate/Donate'
import BasketPage from './pages/cart/CartPage'
import ProductInfoPage from './pages/productInfoPage/ProductInfoPage'
import { useEffect, useState } from 'react'
import { type FilterProps, type ProductRow } from './types/types'
import useAuthStore from './store/UseStore'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'

const App: React.FC = () => {
  const { isLoggedIn, products, data, fetchProductsFromSupabase } = useAuthStore()
  const [filter, setFilter] = useState<FilterProps>({
    category: "All",
    status: "All",
    changeFilter: () => { },
    filteredProducts: [],
    // products: products
  })

  const lowercaseStatusFilter = filter.status.toLowerCase()
  const lowercaseCategoriesFilter = filter.category.toLowerCase()
  const noImg = 'https://imagenesparaperfildewasap.com/wp-content/uploads/no-hay-foto-2.png'


  const filterProducts = (products: ProductRow[]): ProductRow[] => {
    return products.filter((product) => {
      const productStatus = product.status.toLowerCase()
      const productCategory = product.category.toLowerCase()

      const statusMatch = filter.status === "All" || productStatus === lowercaseStatusFilter
      const categoryMatch = filter.category === "All" || productCategory === lowercaseCategoriesFilter

      return statusMatch && categoryMatch
    })
  }
  const filteredProducts = filterProducts(products)
  
  useEffect(() => {
    
  }, [fetchProductsFromSupabase, filter, filteredProducts, products.length])
  return (
    <>
    <Routes>
        <Route path='/' element={<Home changeFilter={setFilter} filteredProducts={filteredProducts} noImg={noImg} />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products' element={<ProductPage noImg={noImg} changeFilter={setFilter} filteredProducts={filteredProducts} />} />
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
