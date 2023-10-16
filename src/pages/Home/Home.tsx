
import HeaderTest from '../../components/Header/Header'
import Searchbar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/productCard/ProductCard'
import useAuthStore from '../../store/UseStore'
import { type HomeProps } from '../../types/types'

// import SearchSection from '../../components/SearchSection/SearchSection'
// import { arrayOfObjects } from "../../components/Basket/Basketitem"
import { Grid } from '@mui/material'
import Filter from '../../components/filter/Filter'
// import { Session, User } from '@supabase/supabase-js'

// import MenuBtn from "../components/MenuBtn/MenuBtn";
// type HomeProps = {
//   changeFilter: (filter: { categories: string; status: string }) => void;
//   filteredProducts: productsListProps; // Asegúrate de importar el tipo ProductListProps
// };
// type filteredProducts = productsListProps
// type Dataprops = {

//   user: User;
//   session: Session;

// }
const Home: React.FC<HomeProps> = ({ changeFilter, filteredProducts }) => {
  const { isLoggedIn, data } = useAuthStore()
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
  console.log(data)

  return (
    <>
      <HeaderTest />
      <Searchbar placeholder='Search' />
      {isLoggedIn ? <p>Welcome, {data?.user?.email}</p> : null}
      <Filter changeFilter={changeFilter} categories={''} status={''} filteredProducts={filteredProducts} />
      {filteredProducts.length === 0 && (
        <p>No se encontraron productos que coincidan con los filtros.</p>
      )}
      {/* <section className='flex flex-wrap gap-2 m-2 right w-60'> */}
      <section className='flex justify-end p-2'>
        <Grid container spacing={1} columns={4} maxWidth={"80%"} alignContent={'end'} margin={2}>
          {filteredProducts.map((product) => (


            <Grid key={product.id} className='p-2 '>

            <ProductCard key={product.id} img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
          </Grid>

        ))}
        </Grid >
      </section>

    </>
  )
}

export default Home
