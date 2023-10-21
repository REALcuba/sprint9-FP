import SearchSection from '../../components/SearchSection/SearchSection'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '@mui/material/Grid'
import Filter from '../../components/filter/Filter'
import { FilterProps } from '../../types/types'
import useAuthStore from '../../store/UseStore'

const ProductPage: React.FC<FilterProps> = ({ changeFilter, filteredProducts }) => {
  const { isLoggedIn, data } = useAuthStore()

  return (
    <>
      <Header />
        <SearchSection />
      {isLoggedIn ? <p>Welcome, {data?.user?.email}</p> : null}
      <Filter categories={''} status={''} filteredProducts={filteredProducts} changeFilter={changeFilter} />
      {filteredProducts.length === 0 && (
        <p>No se encontraron productos que coincidan con los filtros.</p>
      )}
      <section className='flex justify-end p-2'>
        <Grid container spacing={1} columns={4} maxWidth={"80%"} alignContent={'end'} margin={2}>
          {filteredProducts.map((product) => (
            <Grid key={product.id} className='p-2 '>

              <ProductCard 
              key={product.id} 
              img={product.image}
              itemName={product.itemName}
              ownerName={product.ownerName} 
              pickupAddress={product.pickupAddress} />
            </Grid>

          ))}
        </Grid >
      </section>

    </>
  )
}

export default ProductPage
