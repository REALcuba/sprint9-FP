// import './productPage.css'

// import Slider from '../../components/ProductSlider/Slider/Slider'
import SearchSection from '../../components/SearchSection/SearchSection'
import Header from '../../components/Header/Header'
import { arrayOfObjects } from '../../components/Basket/Basketitem'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '@mui/material/Grid'
import Filter from '../../components/filter/Filter'
const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
        <SearchSection />
      <Filter />
      <section className='flex justify-center p-2  gap-2 w-screen'>
        <Grid container spacing={1} columns={4} maxWidth={"95%"} minWidth={'30%'} alignContent={'end'} justifyContent={"center"} margin={2}>
          {arrayOfObjects.productList.map((product) => (
            <Grid   key={product.id} className='p-2 '>

              <ProductCard key={product.id} img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
            </Grid>

          ))}
        </Grid >
      </section>

    </>
  )
}

export default ProductPage
