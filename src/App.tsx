// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
// import SignUp from './pages/SignUp'
import ProductPage from './pages/ProductPage/ProductPage'
import Profile from './pages/Profile/Profile'
import Donate from './pages/Donate/Donate'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/sign-in' element={<SignUp />} /> */}
      {/* routes to protect */}
      <Route path='/products' element={<ProductPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/donate' element={<Donate />} />
    </Routes>
  )
}

export default App
