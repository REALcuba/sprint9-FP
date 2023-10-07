// import './productPage.css'

// import Slider from '../../components/ProductSlider/Slider/Slider'
import SearchSection from '../../components/SearchSection/SearchSection'
import Header from '../../components/Header/Header'
import { arrayOfObjects } from '../../components/Basket/Basketitem'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '@mui/material/Grid'
const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
        <SearchSection />
      <section className='flex justify-end p-2 container gap-2'>
        <Grid container spacing={1} columns={4} maxWidth={"90%"} minWidth={'30%'} alignContent={'end'} margin={2}>
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

export default ProductPage
