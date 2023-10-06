
// components
// import Header from './components/Header/Header.jsx'
// import ProductSlider from "./components/ProductSlider/ProductSlider";
// import { useState } from 'react'
import CategorieSlider from '../../components/CathegoriesSlider/CategoriesSlider'
import HeaderTest from '../../components/Header/HeaderTest'
import Searchbar from '../../components/SearchBar/SearchBar'
// import {is } from useAuthStore
import useAuthStore from '../../store/UseStore'
// import useAuthStore from '../../store/UseStore'
// import SearchSection from '../../components/SearchSection/SearchSection'

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
    <div className=''>
      <HeaderTest />
      <Searchbar placeholder='Find your 2 chance' />
      {isLoggedIn ? <p>Welcome, {user?.username}</p> : null}
      {/* <SearchSection /> */}
      {/* inputs para usar login */}
      {/* <div className='flex flex-col bg-slate-500'>
        <p>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
        {isLoggedIn && <p>Welcome, {user?.username}</p>}
        <div className='bg-slate-500'>
          <input type="text"
            className='border'
            onChange={handleChange}
          />
          <input type="email"
            className='border'

            onChange={(e) => {
              setUserPassword(e.target.value)
            }}

          /> */}
          {/* <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </div> */}
      {/* </div> */}
      <CategorieSlider />

    </div>
  )
}

export default Home
