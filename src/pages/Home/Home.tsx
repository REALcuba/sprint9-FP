
// components
// import Header from './components/Header/Header.jsx'
// import ProductSlider from "./components/ProductSlider/ProductSlider";
// import { useState } from 'react'
// import ProductList from '../../components/Basket/ProductList'
// import CategorieSlider from '../../components/CathegoriesSlider/CategoriesSlider'
import HeaderTest from '../../components/Header/Header'
import Searchbar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/productCard/ProductCard'
// import {is } from useAuthStore
import useAuthStore from '../../store/UseStore'
// import useAuthStore from '../../store/UseStore'
// import SearchSection from '../../components/SearchSection/SearchSection'
import { arrayOfObjects } from "../../components/Basket/Basketitem"
import { Grid } from '@mui/material'

// import MenuBtn from "../components/MenuBtn/MenuBtn";
const Home: React.FC = () => {
  const { isLoggedIn, user } = useAuthStore()
  // const { isLoggedIn, user, login, logout } = useAuthStore()
  // const [username, setUsername] = useState('')
  // const [userPassword, setUserPassword] = useState('')
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setUsername(e.target.value)
  // }
  // const handleLogin = () => {
  //   if (isLoggedIn) return
  //   if (username === '' || userPassword === '') {
  //     alert(`Please enter a valid: username and password`)
  //     console.log('Please enter a username')

  //   } else {
  //     // Llama a la función de login proporcionada por el hook
  //     login(username, userPassword)

    
  //   }
  // }

  // const handleLogout = () => {
  //   // Llama a la función de logout proporcionada por el hook
  //   logout()
  // }
  return (
    <>
      <HeaderTest />
      <Searchbar placeholder='Find your second chance' />
      {isLoggedIn ? <p>Welcome, {user?.username}</p> : null}
      {/* <section className='flex flex-wrap gap-2 m-2 right w-60'> */}
      <section className='flex justify-end p-2'>
        <Grid container spacing={1} columns={4} maxWidth={"80%"} alignContent={'end'} margin={2}>
        {arrayOfObjects.productList.map((product) => (
          <Grid xs={4} md={2} lg={1} key={product.id} className='p-2 '>

            <ProductCard key={product.id} img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
          </Grid>

        ))}
        </Grid >
      </section>

    </>
  )
}

export default Home
